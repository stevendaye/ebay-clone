import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  FormProvider,
  UseFormHandleSubmit,
  UseFormReturn,
} from "react-hook-form";
import { useDispatch } from "react-redux";

import * as api from "../../utils/api";
import routes from "../../routes";
import { SignupFormData } from "../../pages/SignupPage";
import { BuyerForm } from "./BuyerForm";
import { SellerForm } from "./SellerForm";
import { setSignupError } from "../../redux/actions/auth";
import { setToast } from "../../redux/actions/toast";
import { AppDispatch } from "../../redux/store";

type SignupProps = {
  accountType: string;
  avatar: File | null;
  buyer: string;
  formMethods: UseFormReturn<SignupFormData>;
  handleSubmit: UseFormHandleSubmit<SignupFormData>;
};

export type AxiosError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

export const Signup = ({
  accountType,
  avatar,
  buyer,
  formMethods,
  handleSubmit,
}: SignupProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { mutate, isLoading } = useMutation(api.signup, {
    onSuccess(data) {
      dispatch(
        setToast({
          status: "success",
          message: data?.message || "Check your email to ativate your account",
          error: false,
        })
      );

      navigate(routes.home);
    },
    onError(err) {
      const error = err as AxiosError;
      dispatch(setSignupError(error?.response?.data?.message));
      dispatch(
        setToast({
          status: "error",
          message:
            error?.response?.data?.message ??
            "There was an error during your registration. Please try again",
          error: true,
        })
      );
    },
  });

  const onSubmit = handleSubmit((data: SignupFormData) => {
    const formData = new FormData();
    avatar && formData.append("avatar", avatar);
    formData.append("password", data.password);

    if (accountType === buyer) {
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
    } else {
      formData.append("businessName", data.businessName);
      formData.append("businessEmail", data.businessEmail);
      formData.append("country", data.country);
      formData.append("buyerOnly", data.buyerOnly.toString());
    }

    mutate(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form className="w-full" onSubmit={onSubmit}>
        {accountType === buyer ? (
          /* Common Account Form */
          <div className="flex flex-col gap-4">
            <BuyerForm visible={visible} setVisible={setVisible} />

            <div className="text-xs text-gray-600">
              By selecting{" "}
              <span className="font-bold">Create personal account</span>, you
              agree to our{" "}
              <Link to={"#"} className="underline">
                User Agreement
              </Link>{" "}
              and acknowledge reading our{" "}
              <Link to={"#"}> User Privacy Notice</Link>.
            </div>
          </div>
        ) : (
          /* Business Account Form */
          <div className="flex flex-col gap-4 w-full">
            <div className="text-sm">
              Continue to register as a{" "}
              <span className="font-bold my-4">business or nonprofit</span>, or
              if you plan to sell a large number of goods.
            </div>

            <div className="flex flex-col gap-3">
              <SellerForm visible={visible} setVisible={setVisible} />
            </div>

            <div className="text-xs text-gray-600">
              By selecting{" "}
              <span className="font-bold">Create business account</span>, you
              agree to our{" "}
              <Link to={"#"} className="underline">
                User Agreement
              </Link>{" "}
              and acknowledge reading our{" "}
              <Link to={"#"}> User Privacy Notice</Link>.
            </div>
          </div>
        )}

        <button
          type="submit"
          className="font-bold text-white disabled:bg-gray-400 p-3 w-full rounded-[2rem] mt-5 bg-blue-600"
          disabled={isLoading}
        >
          Create {accountType === buyer ? "personal" : "business"} account{" "}
        </button>
      </form>
    </FormProvider>
  );
};
