-- *** Switch on xp_cmdshell
EXEC sp_configure 'show advanced options', 1
RECONFIGURE
GO
EXEC sp_configure 'xp_cmdshell', 1
RECONFIGURE
GO

declare @cmd varchar(500);

-- *** Create a CSV file containing just headers
set @cmd = 'bcp "select * from [master].[dbo].[spt_monitor]" queryout d:\temp\headers.csv -T -c' 
-- set @cmd = 'bcp "exec master.sys.sp_linkedservers" queryout d:\temp\headers.txt -T' 

exec xp_cmdshell @cmd

-- *** Switch off xp_cmdshell
EXEC sp_configure 'xp_cmdshell', 0
RECONFIGURE
GO
