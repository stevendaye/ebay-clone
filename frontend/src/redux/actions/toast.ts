import { EMPTY_TOAST, SHOW_TOAST } from "../constants";
import { ToastAction } from "../reducers/toast";

export const setToast = (payload: ToastAction["payload"]) => {
  return {
    type: SHOW_TOAST,
    payload,
  };
};

export const setEmptyToast = () => {
  return {
    type: EMPTY_TOAST,
  };
};
