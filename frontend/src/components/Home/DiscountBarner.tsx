import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { sanitizeCategory } from "../../utils";

export const DiscountBarner: React.FC = () => {
  const navigate = useNavigate();

  const handleDiscountLink = () => {
    navigate(
      `${routes.products}?category=${sanitizeCategory("Jewelry & Watches")}`
    );
  };

  return (
    <section className="w-full p-4 bg-slate-100 flex justify-between rounded-xl mt-7">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">
          Feel special this summer with 15% off*
        </h2>
        <p className=" text-sm">
          Save on luxury jewelry, watches and handbags for you. &nbsp;&nbsp; |
          &nbsp;&nbsp; *Min. spend $300. Max. discount $100
        </p>
      </div>

      <button
        className="w-44 h-10 rounded-full border-solid border-[1px] border-black
        text-black mt-3 hover:bg-black hover:text-white ease-in-out"
        onClick={handleDiscountLink}
      >
        Code: BOLDER07
      </button>
    </section>
  );
};
