import React from 'react';
import { render } from 'react-dom';
import KeyValueTable from './components/KeyValueTable'

var Connection = require('../lib/tedious').Connection;
var Request = require('../lib/tedious').Request;
var fs = require('fs');

var ITEMS = [
  {name: 'Name', description:'101Capital'},
  {name: 'Description', description:'101 Capital'},
  {name: 'Pro Licenses', description:'Unlimited'},
  {name: 'Trader Licenses  ', description:'Unlimited'},
  {name: 'Apollo Company', description:''},
  {name: 'Groups', description:'1'},
  {name: 'Users', description:'1'},
  {name: 'Users Logged In', description:'0'},
  {name: 'Vendor Lists', description:'0'},
  {name: 'Command Sets', description:'0'},
  {name: 'Designs', description:'1'},
  {name: 'Java Colours', description:'0'},
  {name: 'HTML Colors', description:'0'},
  {name: 'Menu Sets', description:'0'},
];

//<KeyValueTable items={ITEMS} />
var LIST = ['1Capital','Unlimted','1','0','0'];
 
render((
  <div>
    <ul>
      {LIST.map(function(item, i){
        return <li key={i}>{item}</li>;
      })}
    </ul>
  </div>
  ), 
  document.getElementById('root')
);

//document.body.innerText = 0;

