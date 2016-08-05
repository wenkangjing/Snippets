import React from 'react';
import { render } from 'react-dom';

// var Connection = require('tedious').Connection;

// var config = {
//   userName: 'test',
//   password: 'test',
//   server: '192.168.1.210',
  
//   // If you're on Windows Azure, you will need this:
//   options: {encrypt: true}
// };

// var connection = new Connection(config);

// connection.on('connect', function(err) {
//   // If no error, then good to go...
//     executeStatement();
//   }
// );
 
render((
  <div> 
    <h1>Test Authorization</h1>
    <h3>Access SQL Server in a quick and dirty way via TediousJS</h3>
  </div>
  ), 
  document.getElementById('root')
);

//document.body.innerText = 0;

