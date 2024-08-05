import React from "react";
import { useLocation } from "react-router-dom";
import routes from "../../routes";

type CardGridProps = {
  children: React.ReactNode;
};

export const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ${
        pathname === routes.home && "xl:grid-cols-5"
      }`}
    >
      {children}
    </div>
  );
};
