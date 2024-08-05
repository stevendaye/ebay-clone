import React from "react";
import { CountItem } from "./CountItem";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { CiTrash } from "react-icons/ci";

type ItemProps = {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  stock: number;
};

export const CartItem: React.FC<ItemProps> = ({
  id,
  name,
  price,
  imageURL,
  stock,
}) => {
  const count = 1;

  return (
    <div className="flex justify-between items-center gap-4 text-xs hover:bg-slate-200 rounded-2xl p-5 w-full">
      <Link to={`${routes.product}/${id}`}>
        <img src={imageURL} alt="Cart Item" width={"75px"} height={"75px"} />
      </Link>

      <Link to={`${routes.product}/${id}`}>
        <div className="flex flex-col text-xs gap-1">
          <p className="line-clamp-1 w-40 hover:underline">{name}</p>
          <div className="flex gap-2">
            <span className="font-bold">${price * count}</span>
            <p>{"+$15"}</p>
          </div>
        </div>
      </Link>

      <CountItem inStock={stock} />

      <button className="bg-transparent" title="Remove">
        <CiTrash size={25} />
      </button>
    </div>
  );
};
