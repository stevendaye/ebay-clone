import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FcLike } from "react-icons/fc";
import { PiHeart } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CardDetails } from "./CardDetails";
import { Product } from "../../layouts/Header";
import routes from "../../routes";

type CardProps = {
  product: Product;
  withCarouselList?: boolean;
};

export const Card: React.FC<CardProps> = ({ product, withCarouselList }) => {
  const [like, setLike] = useState<boolean>(false);
  const [quickView, setQuickView] = useState<boolean>(false);

  const disableDefaultLinkAction = (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleAddToCart = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    product: Product
  ) => {
    disableDefaultLinkAction(e);
    console.log(`Added to cart ${product.name}`);
  };

  const handleQuickView = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    value: boolean
  ) => {
    disableDefaultLinkAction(e);
    setQuickView(value);
  };

  const handleLike = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    disableDefaultLinkAction(e);
    setLike(!like);
  };

  return (
    <>
      <Link
        to={`${routes.product}/${product.id}`}
        className="flex flex-col gap-4 w-full relative"
      >
        <span className="absolute right-2 top-2 bg-gray-200 rounded-full p-1 cursor-pointer">
          {like ? (
            <FcLike
              size={20}
              title="Remove from watchlist"
              onClick={(e) => handleLike(e)}
            />
          ) : (
            <PiHeart
              className="text-black"
              size={20}
              title="Add to watchlist"
              onClick={(e) => handleLike(e)}
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
            <LiaCartPlusSolid
              size={25}
              title="Add to cart"
              onClick={(e) => handleAddToCart(e, product)}
            />
            {!withCarouselList && (
              <AiOutlineEye
                size={25}
                title="Quick view"
                onClick={(e) => handleQuickView(e, !quickView)}
              />
            )}
          </div>
        </div>
      </Link>

      {quickView && <CardDetails setQuickView={setQuickView} data={product} />}
    </>
  );
};
