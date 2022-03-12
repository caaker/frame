import { createStore } from 'redux';

// 1st required argument for createStore() holds reducers
// each action is a plain object and must have a type property at minimal
// a reducer takes the previous state, applies an action, and returns the next state using a pure function
import reducers from './store-reducers';

// 2nd optional argument for createStore holds the default values starting for state
// this is now set in the reducers directly using default inputs
// import defaultstore from './defaultstore';

// 3rd optional argument for createStore holds middleware similar to Express
import middleware from './store-middleware';

// creates a store which has methods getState(), dispatch(), and subscribe()
// default store has been replaced with {}
const store = createStore(reducers, {}, middleware);

// callback will log any change to the state
store.subscribe( () => {
  // console.log('REDUX: store.getState()', store.getState());
});

export default store;