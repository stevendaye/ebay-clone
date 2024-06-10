import { Link } from "react-router-dom";
import routes from "../../routes";
import styles from "../../styles";
import { UseFormRegister } from "react-hook-form";
import { LoginFormType } from "../../pages/LoginPage";

type RememberMeProps = {
  register: UseFormRegister<LoginFormType>;
};

export const RememberMe = ({ register }: RememberMeProps) => {
  return (
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
  );
};
