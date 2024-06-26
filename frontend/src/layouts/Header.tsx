import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import routes from "../routes";
import pngEbay from "../assets/images/ebay.png";
import { SlArrowDown } from "react-icons/sl";
import { products } from "../static/init";
import { SearchBar } from "../components/Home/SearchBar";
import { CategoriesDropdown } from "../components/Home/CategoriesDropdown";

type ImageURL = {
  public_id: string;
  url: string;
};

type Shop = {
  name: string;
  shop_avatar: ImageURL;
  ratings: number;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  condition: string;
  image_Url: ImageURL[];
  shop: Shop;
  price: number;
  discount_price?: number;
  rating?: number;
  total_sell: number;
  stock: number;
};

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchData, setSearchData] = useState<Product[] | null>(null);
  const [shopCategoryDropdown, setShopCategoryDropdown] =
    useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    const regex = new RegExp(`\\b${term}`, "i");

    const filteredProducts = products?.filter((product) =>
      regex.test(product.name)
    );
    setSearchData(filteredProducts);
  };

  return (
    <>
      {/* Top Header */}
      <div className="border-solid border-[1px] w-full">
        <div className={`${styles.section} py-2 flex justify-between`}>
          <div className="text-xs flex gap-2">
            <p>
              Hi! &nbsp;
              <Link to={routes.signin} className=" text-blue-800 underline">
                Sign in &nbsp;
              </Link>
              or &nbsp;
              <Link to={routes.signup} className=" text-blue-800 underline">
                register
              </Link>
            </p>

            <Link to={routes.deals} className="hover:underline">
              Daily Deals
            </Link>

            <Link to={routes.help} className="hover:underline">
              Help & Contact
            </Link>
          </div>

          <div className="text-xs flex gap-2">
            <Link to={routes.shipto}>Ship</Link>

            <Link to={routes.sell}>Sell</Link>

            <p>Whatchlist</p>
            <p>My ebay</p>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-solid border-b-[1px] w-full">
        <div className={`${styles.section} py-4 flex gap-4 justify-evenly`}>
          <Link to={routes.home}>
            <img src={pngEbay} alt="Ebay" width={"100px"} height={"auto"} />
          </Link>

          <div className="relative">
            <div
              role="button"
              tabIndex={0}
              className="flex gap-1 items-center cursor-pointer"
              onKeyDown={() => setShopCategoryDropdown(!shopCategoryDropdown)}
              onClick={() => setShopCategoryDropdown(!shopCategoryDropdown)}
            >
              <button
                className={`text-sm w-16 text-gray-500 hover:text-blue-500 ${
                  shopCategoryDropdown && "text-blue-500"
                }`}
              >
                Shop by category
              </button>
              <SlArrowDown size={15} />
            </div>

            {shopCategoryDropdown && (
              <CategoriesDropdown
                setShopCategoryDropdown={setShopCategoryDropdown}
              />
            )}
          </div>

          <SearchBar
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            searchData={searchData}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
