import React from "react";
import { AuthMenuLinks } from "../../static/init";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { sanitizeCategory } from "../../utils";

type AuthMenuProps = {
  setOpenAuthMenu: (val: boolean) => void;
};

export const AuthMenu: React.FC<AuthMenuProps> = ({ setOpenAuthMenu }) => {
  return (
    <div
      className="w-[200px] max-h-80 top-9 right-0 absolute p-5 border-solid border-[1px] z-[11] border-gray-300
      text-gray-700 bg-white overflow-hidden text-xs rounded-2xl"
      role="button"
      tabIndex={0}
      onMouseLeave={() => setOpenAuthMenu(false)}
    >
      <div className="flex flex-col gap-2">
        {AuthMenuLinks.map((menu) => (
          <Link
            key={menu}
            to={`${routes.account}/${sanitizeCategory(menu)}`}
            className=" hover:underline"
          >
            {menu}
          </Link>
        ))}
      </div>
    </div>
  );
};
