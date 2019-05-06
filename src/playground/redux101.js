import { createStore } from 'redux';


const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: state.count = 0
      }
    default:
        return state;
  }
});

console.log(store.getState());

//actions are an object that get sent to the store

//i'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});
//i'd like to reset the count to zero

console.log(store.getState());
