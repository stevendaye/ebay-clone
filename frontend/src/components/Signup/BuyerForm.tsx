import { useFormContext } from "react-hook-form";
import { PasswordToggleProps, SignupFormData } from "../../pages/SignupPage";
import { PasswordInput } from "../Auth/PasswordInput";

export const BuyerForm = ({ visible, setVisible }: PasswordToggleProps) => {
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
