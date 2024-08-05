import React, { useEffect, useState } from "react";
import { Product } from "../../layouts/Header";
import { products } from "../../static/init";
import { CartItem } from "./CartItem";

type CartPreviewProps = {
  setOpenCart: (val: boolean) => void;
};

export const CartPreview: React.FC<CartPreviewProps> = ({ setOpenCart }) => {
  const [cartList, setCartList] = useState<Product[] | null>(null);

  useEffect(() => {
    setCartList(products);
  }, []);

  return (
    <div
      className="min-w-[300px] max-w-[475px] top-9 right-0 absolute p-5 border-solid border-[1px] z-[11]
      border-gray-300 text-gray-700 bg-white rounded-2xl cursor-default"
      role="button"
      tabIndex={0}
      onMouseLeave={() => setOpenCart(false)}
    >
      {(!cartList || cartList.length === 0) && (
        <>
          <p className="font-extrabold text-[1.2em] mb-1">Your cart is empty</p>
          <span>Time to start shopping</span>
        </>
      )}

      {cartList && cartList?.length > 0 && (
        <div className="min-w-[415px] max-h-[525px] overflow-y-auto">
          <div className="flex flex-col gap-0 w-full">
            <h3 className="text-xl font-bold mb-2">Shopping Cart</h3>
            {cartList?.slice(0, 7).map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                imageURL={item.image_Url[0].url}
                price={item.price}
                stock={item.stock}
              />
            ))}
          </div>
        </div>
      )}

      {cartList && cartList.length > 0 && (
        <div className="border-t-[1px]">
          <div className="flex justify-between gap-2 text-[17px] py-4">
            <h4>Total Price ({products.length} Items):</h4>
            <h4 className="font-bold">{"$4125"}</h4>
          </div>
          <div className="flex gap-3 mb-1 text-[15px] justify-between w-full">
            <button
              className="border-solid border-2 border-blue-600 bg-transparent py-4 text-blue-600
          hover:font-bold w-full rounded-xl"
            >
              View Cart
            </button>
            <button className="bg-blue-600 text-white py-4 hover:font-bold w-full rounded-xl">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
