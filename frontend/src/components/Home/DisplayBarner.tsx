import React from "react";

export const DisplayBarner: React.FC = () => {
  return (
    <div className="barner-1 text-white w-full h-[22rem] mt-12 rounded-xl overflow-hidden">
      <div className="mt-7 ml-7 flex flex-col gap-4 w-[26rem]">
        <h2 className="text-[2.1rem] font-bold">
          Choose your mood, ride along with your true self
        </h2>

        <p className="text-md w-72">
          Get your car in the best shape for the adventure of your life
        </p>

        <button
          className="w-36 rounded-full py-2 px-4 border-solid border-[1px] border-white hover:border-white
          text-white hover:bg-white hover:text-black"
        >
          Come on in
        </button>
      </div>
    </div>
  );
};
