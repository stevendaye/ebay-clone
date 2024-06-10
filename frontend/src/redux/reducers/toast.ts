import { EMPTY_TOAST, SHOW_TOAST } from "../constants";

export type ToastAction = {
  type: string;
  payload: {
    status: string;
    message: string;
    error: boolean;
  };
};

type ToastState = {
  status: string | null;
  message: string | null;
  error: boolean;
};

const initialState: ToastState = {
  status: null,
  message: null,
  error: false,
};

const updateToast = (state: ToastState, payload: ToastAction["payload"]) => ({
  ...state,
  ...payload,
});

const updateEmptyToast = (state: ToastState) => ({
  ...state,
  status: null,
  message: null,
  error: false,
});

const toastReducer = (
  state: ToastState = initialState,
  action: ToastAction
) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_TOAST:
      return updateToast(state, payload);
    case EMPTY_TOAST:
      return updateEmptyToast(state);
    default:
      return state;
  }
};

export default toastReducer;
