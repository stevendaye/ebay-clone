import { Link, useNavigate } from "react-router-dom";

import routes from "../routes";
import { AuthFooter, AuthHeader } from "../components/Auth";
import { Signin } from "../components/Signin/Signin";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { useEffect } from "react";

export type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage = () => {
  const { isAuthenticated } = useSelector((state: AppState) => state.authState);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate(routes.home);
  }, [isAuthenticated, navigate]);

  return (
    <div className="relative min-h-screen">
      <AuthHeader />

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

        <Signin />
      </section>

      <AuthFooter />
    </div>
  );
};

export default LoginPage;
