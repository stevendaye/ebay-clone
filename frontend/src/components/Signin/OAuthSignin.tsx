import apple from "../../assets/images/apple.png";
import fb from "../../assets/images/fb.png";
import google from "../../assets/images/google.png";

export const OAuthSignin = () => {
  return (
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
  );
};
