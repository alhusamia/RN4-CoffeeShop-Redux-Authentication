import { SET_CURRENT_USER } from "./types";
import decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { setErrors } from "./errors";
import { setOrders } from "./orders";

import instance from "./instance";

const setCurrentUser = (token) => (dispatch) => {
  setAuthToken(token);
  if (!token) {
    dispatch(setOrders([]));
    AsyncStorage.removeItem("history");
  }
  dispatch({
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  });
};

const setAuthToken = (token) => {
  if (token) {
    AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    AsyncStorage.removeItem("myToken");
  }
};
export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("myToken");

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else dispatch(setCurrentUser());
};

export const login = (userData, redirect) => async (dispatch) => {
  try {
    const res = await instance.post("login/", userData);
    const { token } = res.data;

    dispatch(setCurrentUser(token));
    redirect();
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

export const signup = (userData, redirect) => async (dispatch) => {
  try {
    const res = await instance.post("register/", userData);
    const { token } = res.data;

    dispatch(login(userData));
    redirect();
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

export const logout = () => setCurrentUser();
