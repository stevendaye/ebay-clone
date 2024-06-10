import apple from "../../assets/images/apple.png";
import fb from "../../assets/images/fb.png";
import google from "../../assets/images/google.png";

type OAuthProps = {
  accountType: string;
  buyer: string;
};

export const OAuthSignup = ({ accountType, buyer }: OAuthProps) => {
  return (
    <>
      {accountType === buyer && (
        <div className="w-full">
          <div className="flex gap-2 items-center justify-center mt-2">
            <hr className="w-[30%] border-none h-[1px] bg-gray-300" />
            <p className="text-xs px-2">or continue with</p>
            <hr className="w-[30%] border-none h-[1px] bg-gray-300" />
          </div>

          <div className="flex justify-between mt-5 gap-3 max-sm:flex-col max-sm:items-center">
            <button
              className="flex items-center w-36 rounded-[2rem] bg-[#4267B2] px-4 py-3
                font-bold text-white"
            >
              <img src={fb} alt="Facebook" width="20px" height="20px" />
              <span className="text-sm px-2 flex justify-center w-full mt-[0.2rem]">
                Facebook
              </span>
            </button>

            <button
              className="flex items-center w-36 rounded-[2rem] bg-transparent border-[1px]
                border-solid border-gray-700 px-4 py-3 font-bold"
            >
              <img src={google} alt="Google" width="20px" height="20px" />
              <span className="text-sm px-2 flex justify-center w-full mt-[0.15rem]">
                Google
              </span>
            </button>

            <button
              className="flex items-center w-28 rounded-[2rem] bg-transparent border-[1px]
                border-solid border-gray-700 px-4 py-3 font-bold"
            >
              <img src={apple} alt="Apple" width="16px" height="16px" />
              <span className="text-sm px-2 flex justify-center w-full mt-[0.4rem]">
                Apple
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
