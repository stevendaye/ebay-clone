import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { PasswordInput } from "../Auth/PasswordInput";
import { OAuthSignin } from "./OAuthSignin";
import { RememberMe } from "./RememberMe";
import { LoginFormType } from "../../pages/LoginPage";
import { AxiosError } from "../Signup/Signup";
import * as api from "../../utils/api";
import { useDispatch } from "react-redux";
import { setLoginError, setLoginSuccess } from "../../redux/actions/auth";
import { setToast } from "../../redux/actions/toast";
import { AppDispatch } from "../../redux/store";

export const Signin = () => {
  const formMethods = useForm<LoginFormType>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const [visible, setVisible] = useState<boolean>(false);

  const query = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();

  const { mutate, isLoading } = useMutation(api.signin, {
    onSuccess(data) {
      dispatch(setLoginSuccess(data.user));
      dispatch(
        setToast({
          status: "success",
          message: data?.message || "Signed in successfully",
          error: false,
        })
      );

      query.invalidateQueries("validateToken");
    },
    onError(err) {
      const error = err as AxiosError;
      dispatch(setLoginError(error?.response?.data?.message));
      dispatch(
        setToast({
          status: "error",
          message:
            error?.response?.data?.message ??
            "We can't sign you in a the moment. Please try again later",
          error: true,
        })
      );
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className="mt-8 mx-auto w-full max-w-md">
      <div className="px-4 sm:rounded-lg sm:px-10 border-solid">
        <FormProvider {...formMethods}>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                <input
                  type="text"
                  id="email"
                  autoComplete="email"
                  placeholder="Email or username"
                  className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
                  {...register("email", {
                    required: "Enter your email address",
                  })}
                />

                {errors.email && (
                  <span className=" text-red-500 text-xs block mt-1">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <PasswordInput visible={visible} setVisible={setVisible} />

            <RememberMe register={register} />

            <div className="flex flex-col w-full">
              <button
                type="submit"
                className="font-bold relative w-full flex justify-center py-3 px-4 border border-transparent text-sm
                rounded-[2rem] bg-blue-600 hover:bg-blue-700 text-white transition-all disabled:bg-gray-400"
                disabled={isLoading}
              >
                Sign in
              </button>
            </div>
          </form>
        </FormProvider>

        <OAuthSignin />
      </div>
    </div>
  );
};
