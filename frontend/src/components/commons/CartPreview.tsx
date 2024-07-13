import React from "react";

type CartPreviewProps = {
  setOpenCart: (val: boolean) => void;
};

export const CartPreview: React.FC<CartPreviewProps> = ({ setOpenCart }) => {
  return (
    <div
      className="w-[300px] max-h-80 top-9 right-0 absolute p-5 border-solid border-[1px] z-[11] border-gray-300
      text-gray-700 bg-white overflow-hidden"
      role="button"
      tabIndex={0}
      onMouseLeave={() => setOpenCart(false)}
    >
      <p className="font-extrabold text-[1.2em] mb-1">Your cart is empty</p>
      <span>Time to start shopping</span>
    </div>
  );
};
