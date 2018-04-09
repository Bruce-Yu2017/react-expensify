import {createStore} from "redux";

// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// })
//////// incrementCount can be simplyied as:       /////////
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
  //   {incrementBy: incrementBy} can be simplied as: {incrementBy}
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
})

const reset = () => ({
  type: "RESET"
})

const set = ({set = 10} = {}) => ({
  type: "SET",
  set
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      }
    case "RESET":
      return {
        count: 0
      }
    case "SET":
      return {
        count: action.set
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);
console.log(store.getState())
// const sub = store.subscribe(() => {
//   console.log(store.getState())    
// })



store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 20}));
store.dispatch(reset());
store.dispatch(set());
// store.dispatch({
//   type: "DECREMENT"
// })
// store.dispatch({
//   type: "RESET"
// })
