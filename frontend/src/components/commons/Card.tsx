import React, { useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { PiHeart } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CardDetails } from "./CardDetails";
import { Product } from "../../layouts/Header";

type CardProps = {
  product: Product;
  withCarouselList?: boolean;
};

export const Card: React.FC<CardProps> = ({ product, withCarouselList }) => {
  const [like, setLike] = useState<boolean>(false);
  const [quickView, setQuickView] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    console.log(`Added to cart ${product.name}`);
  };

  return (
    <>
      <Link to={"#"} className="flex flex-col gap-4 w-full relative">
        <span className="absolute right-2 top-2 bg-gray-200 rounded-full p-2 cursor-pointer">
          {like ? (
            <FcLike
              size={17}
              title="Remove from wishlist"
              onClick={() => setLike(!like)}
            />
          ) : (
            <PiHeart
              className="text-black"
              size={17}
              title="Add to wishlist"
              onClick={() => setLike(!like)}
            />
          )}
        </span>

        <div className="w-full h-72 border-solid border-[1px] p-7 bg-slate-50 rounded-lg">
          <img
            src={product.image_Url[0].url}
            className="w-full h-full object-contain"
            alt="Product"
          />
        </div>
        <p className="w-full font-bold text-xs line-clamp-2 hover:underline">
          {product?.name}
        </p>
        <div className="w-full line-clamp-3">
          <p className="text-xs w-full text-gray-600">{product?.description}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2">
            <p className="font-bold text-sm">${product?.price}</p>
            {!!product.discount_price && (
              <p className="font-bold text-sm text-gray-400 line-through">
                ${product?.discount_price}
              </p>
            )}
          </div>
          <div className="flex gap-4 text-xs text-black hover:font-bold py-2 px-3">
            <AiOutlineShoppingCart
              size={25}
              title="Add to cart"
              onClick={() => handleAddToCart(product)}
            />
            {!withCarouselList && (
              <AiOutlineEye
                size={25}
                title="Quick view"
                onClick={() => setQuickView(!quickView)}
              />
            )}
          </div>
        </div>
      </Link>

      {quickView && <CardDetails setQuickView={setQuickView} data={product} />}
    </>
  );
};
