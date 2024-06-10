import {
  CLEAR_ERROR,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "../constants";
import { AuthAction } from "../reducers/auth";

export const setSignupSuccess = (payload: AuthAction["payload"]) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const setSignupError = (payload: AuthAction["payload"]) => ({
  type: SIGNUP_ERROR,
  payload,
});

export const setLoginSuccess = (payload: AuthAction["payload"]) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginError = (paylaod: AuthAction["payload"]) => ({
  type: LOGIN_ERROR,
  paylaod,
});

export const setLoadUserSuccess = (payload: AuthAction["payload"]) => ({
  type: LOAD_USER_SUCCESS,
  payload,
});

export const setLoadUserError = (payload: AuthAction["payload"]) => ({
  type: LOAD_USER_ERROR,
  payload,
});

export const setLogout = () => ({
  type: LOGOUT,
});

export const clearAuthError = () => ({
  type: CLEAR_ERROR,
});
