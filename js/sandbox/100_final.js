import {createStore, combineReducers} from 'redux';
import React from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';

var low = ((state=0, action) => {
  if (action.type === 'UP') {
    return state + 1;
  }
  return state;
});


var high = ((state=9, action) => {
  if (action.type === 'DOWN') {
    return state - 1;
  }
  return state;
});


// 1) create the store
// 2) get the state
// 3) change the state
// 4) subscribe to changes

const Basement = (props) => {
  const state = props.high;
  return (
    <div>basement! {state}
    <button onClick={props.down}>down</button>
    </div>
  );
}

const Middle = () => {
  return (
    <div>middle !<XBasement/></div>
  );
}

const TopLevel = (props) => {
  const state = props.low;
  return (
    <div> top! {state}
      <button onClick={props.up}>up</button>
      <Middle/>
    </div>
  );
}

const mapState = (state) => {
  return {
    low: state.low
  }
}

const mapDispatch = (dispatch) => {
  return {
    up: () => dispatch({type:'UP'})
  }
}

const mapStateBasement = (state) => {
  return {
    high: state.high
  }
}

const mapDispatchBasement = (dispatch) => {
  return {
    down: () => dispatch({type:'DOWN'})
  }
}

const XTopLevel = connect(mapState, mapDispatch)(TopLevel)
const XBasement = connect(mapStateBasement, mapDispatchBasement)(Basement)
const store = createStore(combineReducers({low:low, high:high}), 
  window.devToolsExtension ? window.devToolsExtension() : undefined);

render((
  <Provider store={store}>
    <div>
      <XTopLevel />
    </div>
  </Provider>
  ),
  document.getElementById('root')
);

