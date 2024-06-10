import { useFormContext } from "react-hook-form";
import { PasswordFormData, PasswordToggleProps } from "../../pages/SignupPage";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const PasswordInput = ({ visible, setVisible }: PasswordToggleProps) => {
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
