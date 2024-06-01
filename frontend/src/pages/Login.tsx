import { ChangeEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles";
import { Link } from "react-router-dom";
import routes from "../routes";
import apple from "../assets/images/apple.png";
import fb from "../assets/images/fb.png";
import google from "../assets/images/google.png";
import ebay from "../assets/images/ebay.png";

type LoginType = {
  email: string;
  password: string;
  remember: boolean;
};

const Login = () => {
  const [input, setInput] = useState<LoginType>({
    email: "",
    password: "",
    remember: true,
  });
  const [visible, setVisible] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, remember: e.target.checked });
  };

  return (
    <div className="relative min-h-screen">
      <header className="w-full pt-5 pr-5 pl-8">
        <Link to={routes.home}>
          <img src={ebay} alt="Ebay" width={"100px"} height={"auto"} />
        </Link>
      </header>

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
            <form className="space-y-5">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  <input
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={onChange}
                    placeholder="Email or username"
                    value={input.email}
                    required
                    className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
                  />
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
                    name="password"
                    autoComplete="current-password"
                    onChange={onChange}
                    placeholder="Password"
                    value={input.password}
                    required
                    className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
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
                    name="remember"
                    id="remember-me"
                    checked={input.remember}
                    onChange={onCheck}
                    className="w-4 h-4 text-black focus:black border-gray-600 rounded cursor-pointer"
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

      <footer className="absolute bottom-0 text-center text-xs text-gray-700 border-t-[1px] py-7 border-solid w-full">
        Copyright © 1995-2024 eBay Clone by Steven Audrey Daye |
        hello@stevendaye.com. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Login;
