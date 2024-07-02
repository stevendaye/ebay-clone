import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Product } from "../../layouts/Header";
import { RxCross1 } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

type CardDetailsProps = {
  setQuickView: (val: boolean) => void;
  data: Product;
};

export const CardDetails: React.FC<CardDetailsProps> = ({
  setQuickView,
  data,
}) => {
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    count > 1 && setCount((count) => count - 1);
  };
  const decrement = () => {
    setCount((count) => count + 1);
  };

  const handleSendMessage = () => {
    console.log("Send Message");
  };
  const handleAddTocart = () => {
    console.log("Added to Cart");
  };
  const handleAddToWishlist = () => {
    console.log("Added to Wishlist");
  };

  return (
    <div
      className="fixed h-screen w-full left-0 top-0 bg-[#00000099] z-10 flex flex-col items-center
      justify-center"
    >
      {data ? (
        <div
          className="w-[55%] h-[50vh] max-lg:w-[80%] max-md:w-[90%] max-sm:w-[90%] bg-white
            rounded-md relative py-8 pl-7 pr-12 overflow-hidden"
        >
          <RxCross1
            size={25}
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setQuickView(false)}
          />
          <div className="flex gap-10 justify-between h-full">
            <div className="flex flex-col h-full">
              <div className="w-[300px] h-[300px]">
                <img
                  src={data.image_Url[0].url}
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mt-auto">
                <img
                  src={data.shop.shop_avatar.url}
                  className="w-[40px] h-[40px] rounded-full"
                  alt="Store"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm text-blue-600 font-bold">
                    {data.shop.name}
                  </h3>
                  <h5 className="text-xs">{data.shop.ratings} Ratings</h5>
                </div>

                <span className="text-xs ml-auto font-bold text-green-500">
                  {data.total_sell} SOLD
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm text-yellow-600 font-bold">
                  {data.condition}
                </h2>

                <button
                  className="bg-transparent text-xs text-black flex items-center gap-2 underline"
                  onClick={handleAddToWishlist}
                >
                  Add to wishlist
                </button>
              </div>

              <h3 className="font-bold text-md line-clamp-2">{data.name}</h3>

              <div className="flex justify-between">
                <StarRatings
                  rating={data.rating}
                  starRatedColor="#EBAD1C"
                  numberOfStars={5}
                  name="rating"
                  starDimension="25px"
                  starSpacing="1px"
                />

                <span className="text-xl">${data.price}</span>
              </div>

              <p className="text-sm line-clamp-6">{data.description}</p>

              <div className="flex flex-col gap-4 text-xs mt-auto">
                <div className="flex items-center ml-auto font-bold">
                  <button
                    disabled={count === 1}
                    className={`px-[0.6rem] py-1 bg-black text-xs text-white rounded-[3px] ${
                      count === 1 && "disabled:bg-[#eee] disabled:text-[#aaa]"
                    }`}
                    onClick={increment}
                  >
                    -
                  </button>
                  <span className="flex w-6 justify-center">{count}</span>
                  <button
                    className="px-2 py-1 bg-black text-white text-xs rounded-[3px]"
                    onClick={decrement}
                  >
                    +
                  </button>
                </div>

                <div className="flex gap-3 ml-auto">
                  <button
                    className="bg-transparent px-4 py-2 text-black rounded-full flex items-center gap-2
                   border-solid border-[1px] border-black hover:underline"
                    onClick={handleSendMessage}
                  >
                    Chat with seller <FiMessageSquare size={20} />
                  </button>
                  <button
                    className="bg-black px-4 py-2 text-white rounded-full flex items-center gap-2 hover:underline"
                    onClick={handleAddTocart}
                  >
                    Add to cart <AiOutlineShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="text-xm flex flex-col justify-center items-center bg-white relative
          w-[55%] h-[50vh] max-lg:w-[80%] max-md:w-[90%] max-sm:w-[90%] rounded-md p-7"
        >
          <RxCross1
            size={25}
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setQuickView(false)}
          />
          <p>There is no preview for this product</p>
        </div>
      )}
    </div>
  );
};
