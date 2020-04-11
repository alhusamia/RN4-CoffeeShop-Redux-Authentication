import { SET_ORDERS } from "./types";
import { AsyncStorage } from "react-native";

export const setOrders = (orders) => ({ type: SET_ORDERS, payload: orders });

export const checkForOrderHistory = () => async (dispatch) => {
  const orders = JSON.parse(await AsyncStorage.getItem("history"));
  dispatch(setOrders(orders));
};
