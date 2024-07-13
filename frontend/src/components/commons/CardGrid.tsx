import React from "react";

type CardGridProps = {
  children: React.ReactNode;
};

export const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
      {children}
    </div>
  );
};
