// 
// very simple version
// using action, reducer, store, subscribe
// 
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

// 2) get the state
// go as a function to display state
const go = () => {
  document.body.innerText = store.getState();
}

// 3) change the state
// whenever a click occur, dispatch a 'UP'
document.addEventListener('click', () => {
  store.dispatch({type: 'UP'});
});

// 4) subscribe changes
// whenever the store changes, the callback function will be called
// update view
store.subscribe(go);

go();