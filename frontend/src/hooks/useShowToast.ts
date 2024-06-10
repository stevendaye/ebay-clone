import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppState } from "../redux/store";

export const useShowToast = () => {
  const { status, message } = useSelector(
    (state: AppState) => state.toastState
  );

  useEffect(() => {
    if (status === "error") toast.error(message);
    if (status === "success") toast.success(message);
    if (status === "warning") toast.warning(message);
  }, [message, status]);
};
