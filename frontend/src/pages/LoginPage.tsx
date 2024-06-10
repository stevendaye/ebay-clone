import { Link } from "react-router-dom";

import routes from "../routes";
import { Footer, Header } from "../components/Auth";
import { Signin } from "../components/Signin/Signin";

export type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage = () => {
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

        <Signin />
      </section>

      <Footer />
    </div>
  );
};

export default LoginPage;
