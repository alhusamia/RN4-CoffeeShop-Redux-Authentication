import { CHECKOUT, SET_ORDERS } from "../actions/types";
import { AsyncStorage } from "react-native";

export default (orders = [], { type, payload }) => {
  switch (type) {
    case SET_ORDERS:
      return payload;
    case CHECKOUT:
      const newHistory = orders.concat(payload);
      AsyncStorage.setItem("history", JSON.stringify(newHistory));
      return newHistory;

    default:
      return orders;
  }
};
