import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import apple from "../assets/images/apple.png";
import fb from "../assets/images/fb.png";
import google from "../assets/images/google.png";
import { Footer, Header } from "../components/Auth";
import * as api from "../utils/api";
import { useShowToast } from "../hooks/useShowToast";
import { AxiosError } from "./SignupPage";

export type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormType>();

  const showToast = useShowToast();
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  const { mutate, isLoading } = useMutation(api.signin, {
    onSuccess(data) {
      console.log("login:", data);
      showToast({
        status: "success",
        message: data?.message || "Signed in successfully",
      });

      navigate(routes.home);
    },
    onError(err) {
      const error = err as AxiosError;
      showToast({
        status: "error",
        message:
          error?.response?.data?.message ||
          "We can't sign you in a the moment. Please try again later",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className="relative min-h-screen">
      <Header />

      <section className="mt-7 flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-center text-[2rem] mt-6 font-extrabold">Hello</h1>
          <p className="text-center">
            Sign to eBay or{" "}
            <Link to={routes.signup} className="text-blue-600 underline">
              create an account
            </Link>
          </p>
        </div>

        <div className="mt-8 mx-auto w-full max-w-md">
          <div className="px-4 sm:rounded-lg sm:px-10 border-solid">
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

              <div className="flex flex-col w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 relative"
                >
                  <input
                    type={visible ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
                    {...register("password", { required: "Enter password" })}
                  />
                  {!visible ? (
                    <AiOutlineEye
                      size={22}
                      className="absolute right-2 top-3 cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      className="absolute right-2 top-3 cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  )}

                  {errors.password && (
                    <span className=" text-red-500 text-xs block mt-1">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <div
                className={`${styles.normal_flex} justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-2`}
              >
                <label
                  htmlFor="remember-me"
                  className={`${styles.normal_flex} ml-1 gap-1 block text-sm text-gray-800 cursor-pointer`}
                >
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-4 h-4 text-black focus:black border-gray-600 rounded cursor-pointer"
                    {...register("rememberMe")}
                  />
                  <span>Stay signed in</span>
                </label>

                <Link
                  to={routes.forgotPassword}
                  className="font-medium text-blue-500 hover:text-blue-600"
                >
                  Forgot your password?
                </Link>
              </div>

              <div className="flex flex-col w-full">
                <button
                  type="submit"
                  className="font-bold relative w-full flex justify-center py-3 px-4 border border-transparent text-sm
                rounded-[2rem] bg-blue-600 hover:bg-blue-700 text-white transition-all"
                  disabled={isLoading}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="w-full space-y-5">
              <div className="flex gap-2 items-center justify-center mt-5">
                <hr className="w-full border-none h-[1px] bg-gray-300" />
                <p className="text-sm">or</p>
                <hr className="w-full border-none h-[1px] bg-gray-300" />
              </div>

              <div className=" flex flex-col gap-3">
                <button className="flex items-center rounded-[2rem] bg-[#4267B2] px-4 py-3 font-bold text-white">
                  <img src={fb} alt="Facebook" width="30px" height="30px" />
                  <span className="flex justify-center w-full">
                    Continue with Facebook
                  </span>
                </button>

                <button className="flex items-center rounded-[2rem] bg-transparent border-[1px] border-solid border-gray-700 px-4 py-3 font-bold">
                  <img src={google} alt="Google" width="30px" height="30px" />
                  <span className="flex justify-center w-full">
                    Continue with Google
                  </span>
                </button>

                <button className="flex items-center rounded-[2rem] bg-transparent border-[1px] border-solid border-gray-700 px-4 py-3 font-bold">
                  <img src={apple} alt="Apple" width="20px" height="20px" />
                  <span className="flex justify-center w-full">
                    Continue with Apple
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoginPage;
