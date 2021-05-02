import { createStore } from 'redux';

//  Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy // is equivalent to incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = (count) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers - 1. are pure functions; 2. never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => { // unsubscribe will contain return value of subscribe method and whenever we call unsubscribe(), the subscription will stop at that point and changes to the store will not get rerendered automatically.
  console.log(store.getState());
})

//Actions - An object that gets sent to the store
//increment
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
//reset
store.dispatch(resetCount());
//decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
//set
store.dispatch(setCount(101));