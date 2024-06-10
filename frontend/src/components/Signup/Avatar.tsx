import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { ChangeEvent, useEffect, useRef } from "react";
import { RxAvatar } from "react-icons/rx";
import { SignupFormData } from "../../pages/SignupPage";

type AvatarProps = {
  register: UseFormRegister<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  setValue: UseFormSetValue<SignupFormData>;
  avatar: File | null;
  setAvatar: (file: File) => void;
};

export const Avatar = ({
  register,
  errors,
  setValue,
  avatar,
  setAvatar,
}: AvatarProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="flex justify-between w-full">
      <h1 className="font-bold text-2xl">Create an account</h1>
      <div className="flex">
        <label htmlFor="avatar" className="text-sm font-medium text-gray-700">
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
  );
};
