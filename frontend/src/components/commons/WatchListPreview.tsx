import React, { useEffect, useState } from "react";
import { Product } from "../../layouts/Header";
import { products } from "../../static/init";
import { PulseLoader } from "react-spinners";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { WatchedItem } from "./WatchedItem";

type WatchListProps = {
  setOpenWatchList: (val: boolean) => void;
};

export const WatchListPreview: React.FC<WatchListProps> = ({
  setOpenWatchList,
}) => {
  const { user } = useSelector((state: AppState) => state.authState);
  const [watchList, setWatchList] = useState<Product[] | null>();

  useEffect(() => {
    setWatchList(products);
  }, []);

  return (
    <div
      className={`absolute flex items-center justify-center text-sm font-bold top-8 right-0 min-h-[160px] min-w-[300px]
      cursor-default border-solid border-[1px] border-gray-300 text-gray-600 bg-white z-[13] rounded-2xl p-5`}
      role="button"
      tabIndex={0}
      onMouseLeave={() => setOpenWatchList(false)}
    >
      {!user ? (
        <div className="w-full text-center">
          Please,&nbsp;
          <Link to={routes.signin} className="text-blue-600">
            sign in
          </Link>
          &nbsp; to see your watch list
        </div>
      ) : (
        <>
          <PulseLoader
            color={"#a3a3a3"}
            loading={!watchList}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <div className="flex flex-col">
            {watchList && watchList.length > 0 && (
              <>
                <p className="text-sm font-bold flex gap-2 items-center">
                  <Link to={routes.watchList}>
                    View all items your are watching
                  </Link>
                  <FaArrowRightLong />
                </p>
                <hr className="mt-4 mb-4" />
              </>
            )}

            <div className="flex gap-7">
              {watchList?.slice(0, 5).map((item) => (
                <WatchedItem
                  key={item.id}
                  id={item.id}
                  imageURL={item.image_Url[0].url}
                  title={item.name}
                  price={item.price}
                  sales={item.total_sell}
                />
              ))}
            </div>
          </div>
          {watchList?.length === 0 && (
            <div className="w-full text-center">
              Hmm! It looks like nothing caught your attention yet.
            </div>
          )}
        </>
      )}
    </div>
  );
};
