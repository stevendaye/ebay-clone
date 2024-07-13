import { UserType } from "../../../../backend/src/commons/types";
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

export type AuthAction = {
  type: string;
  payload: unknown;
};

type AuthState = {
  user: null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const updateAuthSuccess = (
  state: AuthState,
  payload: AuthAction["payload"]
) => ({
  ...state,
  user: payload as UserType,
  isAuthenticated: true,
  isLoading: false,
  error: null,
});

const updateAuthError = (state: AuthState, payload: AuthAction["payload"]) => ({
  ...state,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: payload,
});

const updateLogout = (state: AuthState) => ({
  ...state,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
});

const updateClearError = (state: AuthState) => ({
  ...state,
  error: null,
});

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return updateAuthSuccess(state, payload);
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
    case LOAD_USER_ERROR:
      return updateAuthError(state, payload);
    case LOGOUT:
      return updateLogout(state);
    case CLEAR_ERROR:
      return updateClearError(state);
    default:
      return state;
  }
};

export default authReducer;
