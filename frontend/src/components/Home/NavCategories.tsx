import React from "react";
import { Link } from "react-router-dom";
import { categoriesNav } from "../../static/init";

export const NavCategories: React.FC = () => {
  return (
    <nav className=" text-xs text-gray-600 flex justify-between py-2">
      {categoriesNav.map((catgecory, idx) => (
        <Link
          key={idx}
          to={"#"}
          className=" hover:text-blue-600 hover:underline"
        >
          {catgecory}
        </Link>
      ))}
    </nav>
  );
};
