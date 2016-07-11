import React from 'react';
import { render } from 'react-dom';
import KeyValueList from './components/KeyValueList'

var ITEMS = [
  {name: 'Name', description:'  101Capital'},
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
 
render((
  <div>
    <KeyValueList items={ITEMS} />
  </div>
  ), 
  document.getElementById('root')
);

//document.body.innerText = 0;

