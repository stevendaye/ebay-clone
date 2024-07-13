import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import pngEbay from "../../assets/images/ebay.png";
import React from "react";

export const AuthHeader: React.FC = () => {
  const { pathname } = useLocation();
  const isSignupPage = pathname === routes.signup;
  const isActivationPage = pathname.includes(routes.activationLink);

  return (
    <header
      className={`w-full pt-5 pr-5 pl-8 ${
        (isSignupPage || isActivationPage) && "pb-5 flex justify-between"
      }`}
    >
      <Link to={routes.home}>
        <img src={pngEbay} alt="Ebay" width={"125px"} height={"auto"} />
      </Link>

      {isSignupPage && (
        <div className="text-gray-500 max-sm:text-xs">
          Already have an account?{" "}
          <Link to={routes.signin} className="text-black underline">
            Sign in
          </Link>
        </div>
      )}

      {isActivationPage && (
        <div className="text-blue-600 text-sm max-sm:text-xs">
          <Link to={routes.signup}>Create account</Link> |{" "}
          <Link to={routes.signin} className="underline">
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
};
