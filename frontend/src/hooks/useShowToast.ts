import { toast } from "react-toastify";

type ToastProps = {
  status: string;
  message: string;
};

export const useShowToast = () => {
  const showToast = ({ status, message }: ToastProps) => {
    if (status === "error") toast.error(message);
    if (status === "success") toast.success(message);
    if (status === "warning") toast.warning(message);
  };

  return showToast;
};
