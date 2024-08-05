import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import styles from "../styles";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineBell } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import {
  AuthMenu,
  CartPreview,
  NotificationsPreview,
} from "../components/commons";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { BACKEND_URL } from "../utils/apiClient";
import { BounceLoader } from "react-spinners";
import { WatchListPreview } from "../components/commons/WatchListPreview";
import { Overlay } from "../components/commons/Overlay";

const TopHeader: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state: AppState) => state.authState
  );

  const [openCart, setOpenCart] = useState<boolean>(false);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  const [openAuthMenu, setOpenAuthMenu] = useState<boolean>(false);
  const [openWatchList, setOpenWatchList] = useState<boolean>(false);

  return (
    <div className="border-solid border-[1px] w-full">
      <div className={`${styles.section} py-2 flex justify-between`}>
        <div className="flex gap-2 items-center text-xs">
          <div className="flex gap-1 items-center">
            <span>Hi {!isAuthenticated && "!"} </span>

            {isAuthenticated ? (
              <p className="cursor-pointer">
                <span className="text-blue-600 underline hover:font-bold ">
                  {user?.firstName}
                </span>
                {"!"}
              </p>
            ) : (
              <div className="flex gap-2">
                <Link to={routes.signin} className=" text-blue-800 underline">
                  Sign in
                </Link>
                or
                <Link to={routes.signup} className=" text-blue-800 underline">
                  register
                </Link>
              </div>
            )}
          </div>

          <Link to={routes.deals} className="hover:underline">
            Daily Deals
          </Link>

          <Link to={routes.help} className="hover:underline">
            Help & Contact
          </Link>
        </div>

        <div className="relative text-xs flex gap-5 items-center">
          <Link
            to={routes.shipto}
            className="hover:text-blue-500 hover:underline"
          >
            Ship
          </Link>

          <Link
            to={routes.sell}
            className="hover:text-blue-500 hover:underline"
          >
            Sell
          </Link>

          <div
            className="relative flex gap-2 items-center cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => {
              setOpenWatchList(!openWatchList);
              setOpenNotifications(false);
              setOpenCart(false);
              setOpenAuthMenu(false);
            }}
            onKeyDown={() => {}}
          >
            <span>Whatchlist</span>
            <SlArrowDown size={10} />

            {openWatchList && (
              <WatchListPreview setOpenWatchList={setOpenWatchList} />
            )}
          </div>

          <div
            className="relative ml-5"
            onMouseOver={() => {
              setOpenNotifications(true);
              setOpenCart(false);
              setOpenAuthMenu(false);
              setOpenWatchList(false);
            }}
            onFocus={() => {}}
            tabIndex={0}
            role="button"
          >
            <HiOutlineBell size={25} className="hover:cursor-pointer" />

            {openNotifications && (
              <NotificationsPreview
                setOpenNotifications={setOpenNotifications}
              />
            )}
          </div>

          <div
            className="relative"
            onMouseOver={() => {
              setOpenCart(true);
              setOpenNotifications(false);
              setOpenAuthMenu(false);
              setOpenWatchList(false);
            }}
            onFocus={() => {}}
            tabIndex={0}
            role="button"
          >
            <LuShoppingCart size={25} className="hover:cursor-pointer" />
            <span
              className="text-[9px] bg-red-500 rounded-full px-[8px] py-[2px] text-white font-bold
              absolute right-[-8px] top-[-8px]"
            >
              {"7"}
            </span>

            {openCart && <CartPreview setOpenCart={setOpenCart} />}
          </div>

          {isAuthenticated && (
            <div
              className="relative flex gap-2 items-center cursor-pointer w-[35px] h-[35px] rounded-full border-solid 
              border-blue-600 border-2 p-[2px]"
              onMouseOver={() => {
                setOpenAuthMenu(true);
                setOpenCart(false);
                setOpenNotifications(false);
                setOpenWatchList(false);
              }}
              onFocus={() => {}}
              tabIndex={0}
              role="button"
            >
              <img
                src={`${BACKEND_URL}/${user?.avatar}`}
                alt="Avatar"
                className=" w-full h-full object-fill rounded-full"
              />

              {openAuthMenu && <AuthMenu setOpenAuthMenu={setOpenAuthMenu} />}
            </div>
          )}

          <BounceLoader
            color="#a4a4a4"
            loading={isLoading}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>

        {openWatchList && <Overlay />}
      </div>
    </div>
  );
};

export default TopHeader;
