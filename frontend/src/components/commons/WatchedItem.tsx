import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

type ItemProps = {
  id: number;
  imageURL: string;
  title: string;
  price: number;
  sales: number;
};

export const WatchedItem: React.FC<ItemProps> = ({
  id,
  imageURL,
  title,
  price,
  sales,
}) => {
  return (
    <Link
      to={`${routes.product}/${id}`}
      className="flex flex-col gap-2 p-2 w-full"
    >
      <div className="w-36 h-36">
        <img
          src={imageURL}
          className="w-full h-full object-contain"
          alt="Watched Product"
        />
      </div>
      <p className="w-full text-sm line-clamp-2">{title}</p>
      <p className="font-bold">${price}</p>
      <p className="text-sm text-gray-500">+ ${"14"} Shipping</p>
      <p className=" text-yellow-600">{sales} Sold</p>
    </Link>
  );
};
