import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import apple from "../assets/images/apple.png";
import fb from "../assets/images/fb.png";
import google from "../assets/images/google.png";
import jpgBuyer from "../assets/images/buyer.jpg";
import jpgSeller from "../assets/images/business.jpg";
import { RxAvatar } from "react-icons/rx";
import * as api from "../utils/api";
import { Footer, Header } from "../components/Auth";
import { useShowToast } from "../hooks/useShowToast";

export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: PasswordFormData["password"];
  businessName: string;
  businessEmail: string;
  country: string;
  avatar: File | null;
  buyerOnly: boolean;
};

type PasswordFormData = {
  password: string;
};

type PasswordToggleProps = {
  visible: boolean;
  setVisible: (val: boolean) => void;
};

export type AxiosError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

const buyer: string = "buyer";
const seller: string = "seller";

const SignupPage = () => {
  const formMethods = useForm<SignupFormData>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = formMethods;

  const showToast = useShowToast();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [accountType, setAccountType] = useState<string>(buyer);
  const [visible, setVisible] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File | null>(null);

  const { mutate, isLoading } = useMutation(api.signUp, {
    onSuccess(data) {
      showToast({
        status: "success",
        message: data?.message || "Check your email to ativate your account",
      });

      navigate(routes.home);
    },
    onError(err) {
      const error = err as AxiosError;
      showToast({
        status: "error",
        message:
          error?.response?.data?.message ||
          "There was an error during account activation",
      });
    },
  });

  useEffect(() => {
    setValue("avatar", avatar);
  }, [setValue, avatar]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setAvatar(file);
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

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
    <div className="relative min-h-screen">
      <Header />

      <section className="min-h-screen bg-white flex justify-center px-24 gap-10 max-2xl:px-10">
        <div className="w-[695px] h-[calc(100vh-3rem*2.2)] rounded-2xl max-xl:hidden">
          <img
            src={accountType === buyer ? jpgBuyer : jpgSeller}
            alt="Buyer"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-5 pt-10 w-[900px] h-[calc(100vh-3rem*2.2)] px-56 max-2xl:w-[700px] max-2xl:px-32 max-sm:px-2">
          {/* Avatar */}
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-2xl">Create an account</h1>
            <div className="flex">
              <label
                htmlFor="avatar"
                className="text-sm font-medium text-gray-700"
              >
                <input
                  type="file"
                  className="hidden"
                  id="avatar"
                  accept="image/png,image/jpeg,image/jpg"
                  {...register("avatar", {
                    required: "Choose an avatar profile to continue",
                  })}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />

                {errors.avatar && (
                  <span className="text-red-600 text-xs">
                    {errors.avatar.message}
                  </span>
                )}
              </label>

              <div
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => onKeyDown(e)}
                onClick={(e) => onClick(e)}
                title="Click to upload an avatar"
              >
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8" />
                )}
              </div>
            </div>
          </div>

          {/* Account Type Switch */}
          <div className="flex justify-between gap-2 rounded-[2rem] border-solid border-[1px] border-black p-[0.1rem]">
            <button
              className={`${
                accountType === buyer
                  ? " bg-black text-white"
                  : "bg-transparent"
              } flex-1 p-[0.40rem] rounded-[2rem]`}
              onClick={() => setAccountType(buyer)}
            >
              Personal
            </button>
            <button
              className={`${
                accountType === seller
                  ? " bg-black text-white"
                  : "bg-transparent"
              } flex-1 p-[0.40rem] rounded-[2rem]`}
              onClick={() => setAccountType(seller)}
            >
              Business
            </button>
          </div>

          <FormProvider {...formMethods}>
            <form className="w-full" onSubmit={onSubmit}>
              {accountType === buyer ? (
                /* Common Account Form */
                <div className="flex flex-col gap-4">
                  <BuyerForm visible={visible} setVisible={setVisible} />

                  <div className="text-xs text-gray-600">
                    By selecting{" "}
                    <span className="font-bold">Create personal account</span>,
                    you agree to our{" "}
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
                    <span className="font-bold my-4">
                      business or nonprofit
                    </span>
                    , or if you plan to sell a large number of goods.
                  </div>

                  <div className="flex flex-col gap-3">
                    <SellerForm visible={visible} setVisible={setVisible} />
                  </div>

                  <div className="text-xs text-gray-600">
                    By selecting{" "}
                    <span className="font-bold">Create business account</span>,
                    you agree to our{" "}
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

          {accountType === buyer && (
            <div className="w-full">
              <div className="flex gap-2 items-center justify-center mt-2">
                <hr className="w-[30%] border-none h-[1px] bg-gray-300" />
                <p className="text-xs px-2">or continue with</p>
                <hr className="w-[30%] border-none h-[1px] bg-gray-300" />
              </div>

              <div className="flex justify-between mt-5 gap-3 max-sm:flex-col max-sm:items-center">
                <button className="flex items-center w-36 rounded-[2rem] bg-[#4267B2] px-4 py-3 font-bold text-white">
                  <img src={fb} alt="Facebook" width="20px" height="20px" />
                  <span className="text-sm px-2 flex justify-center w-full mt-[0.2rem]">
                    Facebook
                  </span>
                </button>

                <button className="flex items-center w-36 rounded-[2rem] bg-transparent border-[1px] border-solid border-gray-700 px-4 py-3 font-bold">
                  <img src={google} alt="Google" width="20px" height="20px" />
                  <span className="text-sm px-2 flex justify-center w-full mt-[0.15rem]">
                    Google
                  </span>
                </button>

                <button className="flex items-center w-28 rounded-[2rem] bg-transparent border-[1px] border-solid border-gray-700 px-4 py-3 font-bold">
                  <img src={apple} alt="Apple" width="16px" height="16px" />
                  <span className="text-sm px-2 flex justify-center w-full mt-[0.4rem]">
                    Apple
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const BuyerForm = ({ visible, setVisible }: PasswordToggleProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-full">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            <input
              type="text"
              id="firstName"
              autoComplete="firstName"
              placeholder="First name"
              className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
              {...register("firstName", { required: "Enter your first name" })}
            />

            {errors.firstName && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.firstName.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            <input
              type="text"
              id="lastName"
              autoComplete="lastName"
              placeholder="Last name"
              className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
              {...register("lastName", { required: "Enter your last name" })}
            />

            {errors.lastName && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.lastName.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Email or username"
            className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
            {...register("email", { required: "Enter a valid email address" })}
          />

          {errors.email && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.email.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-col w-full">
        <PasswordInput visible={visible} setVisible={setVisible} />
      </div>
    </>
  );
};

const SellerForm = ({ visible, setVisible }: PasswordToggleProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  return (
    <>
      <div className="flex flex-col w-full">
        <label
          htmlFor="businessName"
          className="block text-sm font-medium text-gray-700"
        >
          <input
            type="text"
            id="businessName"
            autoComplete="businessName"
            placeholder="Business name"
            className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
            {...register("businessName", {
              required: "Enter business email address",
            })}
          />

          {errors.businessName && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.businessName.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="businessEmail"
          className="block text-sm font-medium text-gray-700"
        >
          <input
            type="email"
            id="businessEmail"
            autoComplete="businessEmail"
            placeholder="Business email"
            className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
            {...register("businessEmail", { required: "Enter business name" })}
          />

          {errors.businessEmail && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.businessEmail.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-col w-full">
        <PasswordInput visible={visible} setVisible={setVisible} />
      </div>

      {/* Temprary Country Selector */}
      <div className="flex flex-col w-full">
        <label className="" htmlFor="country">
          <select
            id="country"
            className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
            {...register("country", {
              required: "Enter the country where you operate your business",
            })}
          >
            <option value="">Where is your business registered?</option>
            <option key="bj" value="Benin">
              Benin
            </option>
            <option key="ng" value="Nigeria">
              Nigeria
            </option>
            <option key="ca" value="Canada">
              Canada
            </option>
            <option key="gh" value="Ghana">
              Ghana
            </option>
          </select>
          <span className=" text-xs text-gray-600">
            If your business isn't registered, select your country of resisdence
          </span>

          {errors.country && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.country.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="buyerOnly"
          className="flex items-center gap-3 text-xs text-gray-600"
        >
          <input
            type="checkbox"
            id="buyerOnly"
            className="w-4 h-4 text-black focus:black border-gray-600 rounded cursor-pointer"
            {...register("buyerOnly")}
          />
          <span>I am only interested in buying for ebay for now</span>
        </label>
      </div>
    </>
  );
};

const PasswordInput = ({ visible, setVisible }: PasswordToggleProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PasswordFormData>();

  return (
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
        {...register("password", {
          required: "Enter your password",
          minLength: {
            value: 6,
            message: "Password must be at least six character long",
          },
        })}
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
        <span className="text-red-500 text-xs mt-1 block">
          {errors.password.message}
        </span>
      )}
    </label>
  );
};

export default SignupPage;
