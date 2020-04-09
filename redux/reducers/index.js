import { combineReducers } from "redux";

import coffeeshops from "./coffeeshops";
import cart from "./cart";
import userReducer from "./user";
import errorReducer from "./errors";

export default combineReducers({
  coffeeshops,
  cart,
  user: userReducer,
  errors: errorReducer,
});
