private double GetTimeDrift(string ntpServer)
{
  if (string.IsNullOrEmpty(ntpServer))
      return 0.0;

  double gap = 0.0;
  try
  {
      // NTP message size - 16 bytes of the digest (RFC 2030)
      var ntpData = new byte[48];

      //Setting the Leap Indicator, Version Number and Mode values
      ntpData[0] = 0x1B; //LI = 0 (no warning), VN = 3 (IPv4 only), Mode = 3 (Client Mode)

      var addresses = Dns.GetHostEntry(ntpServer).AddressList;

      //The UDP port number assigned to NTP is 123
      var ipEndPoint = new IPEndPoint(addresses[0], 123);
      //NTP uses UDP
      var socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);

      socket.Connect(ipEndPoint);

      //Stops code hang if NTP is blocked
      socket.ReceiveTimeout = 2000; // 2s delay

      socket.Send(ntpData);
      socket.Receive(ntpData);
      socket.Close();

      //Offset to get to the "Transmit Timestamp" field (time at which the reply 
      //departed the server for the client, in 64-bit timestamp format."
      const byte serverReplyTime = 40;

      //Get the seconds part
      ulong intPart = BitConverter.ToUInt32(ntpData, serverReplyTime);

      //Get the seconds fraction
      ulong fractPart = BitConverter.ToUInt32(ntpData, serverReplyTime + 4);

      //Convert From big-endian to little-endian
      intPart = SwapEndianness(intPart);
      fractPart = SwapEndianness(fractPart);

      var milliseconds = (intPart * 1000) + ((fractPart * 1000) / 0x100000000L);

      //**UTC** time
      var networkDateTime = (new DateTime(1900, 1, 1, 0, 0, 0, DateTimeKind.Utc)).AddMilliseconds((long)milliseconds);

      gap = (networkDateTime - DateTime.UtcNow).TotalMilliseconds;
  }
  catch (Exception ex)
  {
    // 
  }

  return gap;
}
