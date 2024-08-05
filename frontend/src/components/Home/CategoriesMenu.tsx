import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { sanitizeCategory } from "../../utils";
import { categoriesDropdown } from "../../static/initCategories";

type categoriesMenuProps = {
  setCategoriesMenu: (val: boolean) => void;
};

export const CategoriesMenu: React.FC<categoriesMenuProps> = ({
  setCategoriesMenu,
}) => {
  return (
    <div
      className="flex flex-col absolute w-[867px] border-solid border-[1px] border-gray-300
      left-0 top-11 z-[2] text-xs bg-white p-6 rounded-2xl"
      tabIndex={0}
      role="button"
      onKeyDown={() => {}}
      onMouseLeave={() => setCategoriesMenu(false)}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-7">
          {categoriesDropdown.slice(0, 3).map((category) => (
            <div className="flex flex-col gap-2" key={category.id}>
              <div className="flex gap-2 items-center">
                <Link
                  to={`${routes.products}?category=${sanitizeCategory(
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
                  to={`${routes.products}?category=${sanitizeCategory(
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
                  to={`${routes.products}?category=${sanitizeCategory(
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
                  to={`${routes.products}?category=${sanitizeCategory(
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
                  to={`${routes.products}?category=${sanitizeCategory(
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
                  to={`${routes.products}?category=${sanitizeCategory(
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

      <hr className="mt-4 mb-4" />

      <footer className="ml-auto font-bold text-sm">
        <Link to={routes.products} className="hover:text-blue-600">
          See all categories
        </Link>
      </footer>
    </div>
  );
};
