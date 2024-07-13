import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { categoriesDropdown } from "../../static/init";
import routes from "../../routes";
import { sanitizeString } from "../../utils";

type DropdownProps = {
  setShopCategoryDropdown: (val: boolean) => void;
};

export const CategoriesDropdown: React.FC<DropdownProps> = ({
  setShopCategoryDropdown,
}) => {
  return (
    <div
      className="flex justify-between w-[867px] border-solid border-[1px] border-gray-300
      absolute left-0 top-11 z-[2] text-xs bg-white p-6 pb-10"
      tabIndex={0}
      role="button"
      onKeyDown={() => setShopCategoryDropdown(false)}
      onMouseLeave={() => setShopCategoryDropdown(false)}
    >
      <div className="flex flex-col gap-7">
        {categoriesDropdown.slice(0, 3).map((category) => (
          <div className="flex flex-col gap-2" key={category.id}>
            <div className="flex gap-2 items-center">
              <Link
                to={`${routes.products}?category=${sanitizeString(
                  category.title
                )}`}
                className="hover:underline hover:text-blue-600 font-bold text-sm"
              >
                {category.title}
              </Link>
              <MdKeyboardArrowRight size={20} />
            </div>

            {category.subs.map((subCategory) => (
              <Link
                key={subCategory.id}
                to={`${routes.products}?category=${sanitizeString(
                  subCategory.subtitle
                )}`}
                className="text-gray-500 hover:underline hover:text-blue-600 ml-2"
              >
                {subCategory.subtitle}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-7">
        {categoriesDropdown.slice(3, 6).map((category) => (
          <div className="flex flex-col gap-2" key={category.id}>
            <div className="flex gap-2 items-center">
              <Link
                to={`${routes.products}?category=${sanitizeString(
                  category.title
                )}`}
                className="hover:underline hover:text-blue-600 font-bold text-sm"
              >
                {category.title}
              </Link>
              <MdKeyboardArrowRight size={20} />
            </div>

            {category.subs.map((subCategory) => (
              <Link
                key={subCategory.id}
                to={`${routes.products}?category=${sanitizeString(
                  subCategory.subtitle
                )}`}
                className="text-gray-500 hover:underline hover:text-blue-600 ml-2"
              >
                {subCategory.subtitle}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-7">
        {categoriesDropdown.slice(6).map((category) => (
          <div className="flex flex-col gap-2" key={category.id}>
            <div className="flex gap-2 items-center">
              <Link
                to={`${routes.products}?category=${sanitizeString(
                  category.title
                )}`}
                className="hover:underline hover:text-blue-600 font-bold text-sm"
              >
                {category.title}
              </Link>
              <MdKeyboardArrowRight size={20} />
            </div>

            {category.subs.map((subCategory) => (
              <Link
                key={subCategory.id}
                to={`${routes.products}?category=${sanitizeString(
                  subCategory.subtitle
                )}`}
                className="text-gray-500 hover:underline hover:text-blue-600 ml-2"
              >
                {subCategory.subtitle}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
