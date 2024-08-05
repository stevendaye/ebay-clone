import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { sanitizeCategory } from "../../utils";
import { popularCategories } from "../../static/initCategories";

export const PopularCategories: React.FC = () => {
  return (
    <section className="mt-12">
      <h1 className=" text-xl font-bold">Explore Popular Categories</h1>
      <div className="flex justify-between mt-5">
        {popularCategories.map((p_categ) => (
          <Link
            to={`${routes.products}?category=${sanitizeCategory(
              sanitizeCategory(p_categ.title)
            )}`}
            key={p_categ.id}
          >
            <div className="flex flex-col">
              <div className="flex flex-col items-center gap-2">
                <article className="w-36 h-36 rounded-full border-2 border-solid">
                  {p_categ.image}
                </article>
                <span> {p_categ.title} </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
