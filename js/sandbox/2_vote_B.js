// 
// Simple how to of React Redux
// using action, reducer, store, store subscribe, react-component, componentDidMount
// 

// React as class name (Start with upper case)
// render and createStore as function name (start with lower case)
import React from 'react'; 
import { render } from 'react-dom';
import {createStore} from 'redux';

const reducer = ( (state = 0, action) => {
  console.log(state, action);
  if (action.type === 'UP'){
    return state + 1;
  }
  return state;
});

// 1) create a store
const store  = createStore(reducer, 
  window.devToolsExtension ? window.devToolsExtension() : undefined);



// go as a function to display state
export class TopLevel extends React.Component {
  // 4) subscribe changes
  // componentDidMount is executed after first render only on the client side.
  // inside componentDidMount, subscribe the store changed to a force update
  // thus, whenevenr a store changed, forceUpdate() will be called as a callback
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render() {
    // 2) get the state
    // render() returns a html tag for view rendering
    // store -> view
    const state = store.getState();

    // 3) change the state
    // whenever user click, 
    // -> dispatch an action 
    // -> reducer 
    // -> state changed
    // -> store subscriber will be triggered
    return (
      <div>top ! {state}
        <button onClick={() => {store.dispatch({type: 'UP'})}}>up</button>
      </div>
    );
  }
}

// main render
render((
    <TopLevel />
  ), 
  document.getElementById('root')
);

