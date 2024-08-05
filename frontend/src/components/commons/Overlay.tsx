import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

type OverlayProps = {
  children?: React.ReactNode;
};

export const Overlay: React.FC<OverlayProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: AppState) => state.authState);

  return (
    <div
      className={`w-full h-[100vh] absolute top-0 left-0 bg-[#00000099] z-[12] flex flex-col
      items-start cursor-default overflow-hidden ${
        !isAuthenticated ? "mt-[42px]" : "mt-[51px]"
      } `}
    >
      {children}
    </div>
  );
};
