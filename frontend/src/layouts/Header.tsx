import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import routes from "../routes";
import pngEbay from "../assets/images/ebay.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { products } from "../static/init";
import { SearchBar } from "../components/Home/SearchBar";
import { CategoriesMenu } from "../components/Home/CategoriesMenu";
import TopHeader from "./TopHeader";

export type ImageURL = {
  public_id: string;
  url: string;
};

export type Shop = {
  name: string;
  shop_avatar: ImageURL;
  ratings: number;
};

export type Product = {
  id: number;
  name: string;
  categories: string[];
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
  const [categoriesMenu, setCategoriesMenu] = useState<boolean>(false);

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
      <TopHeader />

      {/* Main header */}
      <div className="border-solid border-b-[1px] w-full">
        <div
          className={`${styles.section} py-4 flex items-center gap-4 justify-evenly`}
        >
          <Link to={routes.home}>
            <img src={pngEbay} alt="Ebay" width={"145px"} height={"auto"} />
          </Link>

          <div className="relative border-solid">
            <div
              role="button"
              tabIndex={0}
              className="flex gap-1 items-center cursor-pointer"
              onKeyDown={() => {}}
              onClick={() => setCategoriesMenu(!categoriesMenu)}
            >
              <button
                className={`text-sm leading-4 w-16 text-gray-600 hover:text-blue-600 ${
                  categoriesMenu && "text-blue-500"
                }`}
              >
                Shop by category
              </button>
              {categoriesMenu ? (
                <SlArrowUp size={15} />
              ) : (
                <SlArrowDown size={15} />
              )}
            </div>

            {categoriesMenu && (
              <CategoriesMenu setCategoriesMenu={setCategoriesMenu} />
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
