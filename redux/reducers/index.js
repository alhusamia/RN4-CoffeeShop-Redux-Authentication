import { combineReducers } from "redux";

import coffeeshops from "./coffeeshops";
import cart from "./cart";
import user from "./user";
import errors from "./errors";
import orders from "./orders";

export default combineReducers({
  coffeeshops,
  cart,
  user,
  errors,
  orders,
});
