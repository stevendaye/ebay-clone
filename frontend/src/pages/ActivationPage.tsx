import React, { useEffect } from "react";
import { useMutation } from "react-query";
import { Link, useParams } from "react-router-dom";
import * as api from "../utils/api";
import { AuthHeader } from "../components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setSignupError, setSignupSuccess } from "../redux/actions/auth";
import { AxiosError } from "../components/Signup/Signup";
import { setToast } from "../redux/actions/toast";
import { AppDispatch, AppState } from "../redux/store";
import { PulseLoader } from "react-spinners";
import routes from "../routes";

const ActivationPage: React.FC = () => {
  const { token } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const res = useSelector((state: AppState) => state.toastState);

  const { mutate, isLoading } = useMutation(api.activateAccount, {
    onSuccess(data) {
      dispatch(setSignupSuccess(data.user));
      dispatch(
        setToast({
          status: "success",
          message: "Your account has been successfully activated",
          error: false,
        })
      );
    },
    onError(err) {
      const error = err as AxiosError;
      dispatch(setSignupError(error?.response?.data?.message));
      dispatch(
        setToast({
          status: "error",
          message:
            error?.response?.data?.message ??
            "Your account can't ve verify at the moment",
          error: true,
        })
      );
    },
  });

  useEffect(() => {
    if (token) {
      mutate(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" relative min-h-screen">
      <AuthHeader />

      <div className="w-full h-[100vh] flex flex-col justify-center items-center text-gray-800 text-sm font-bold">
        <PulseLoader
          color={"blue"}
          loading={isLoading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {res.error && (
          <div className="font-normal text-center">
            <p className="text-gray-700">Your Token has expired!</p>
            <Link to={routes.home} className="underline text-blue-700">
              Let's keep exploring
            </Link>
          </div>
        )}

        {!res.error && res.status === "success" && (
          <div className="font-normal text-center">
            <p className="font-bold text-gray-700">
              Your account was activated successfully
            </p>
            <Link to={routes.home} className="underline text-blue-700">
              Let's start exploring
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
