import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

const Trades = (state = {}, action) => {
  switch (action.type) {
      case 'SET_TRADES':
          return action.data
      default:
          return state
  }
}
const Ticker = (state = {}, action) => {
  switch (action.type) {
      case 'SET_TICKER':
          return Object.assign({}, action.data)
      default:
          return state
  }
}
const Depth = (state = {}, action) => {
  switch (action.type) {
      case 'SET_DEPTH':
          return Object.assign({}, action.data)
      default:
          return state
  }
}

export default combineReducers({
  auth,
  message,
  trades: Trades,
  depth: Depth,
  ticker: Ticker
});
