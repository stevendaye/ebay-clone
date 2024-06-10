import { useFormContext } from "react-hook-form";
import { PasswordToggleProps, SignupFormData } from "../../pages/SignupPage";
import { PasswordInput } from "../Auth/PasswordInput";

export const SellerForm = ({ visible, setVisible }: PasswordToggleProps) => {
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
