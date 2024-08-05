import React, { ChangeEvent } from "react";
import Select, { SingleValue } from "react-select";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../layouts/Header";
import { categoriesList, OptionType } from "../../static/initCategories";
import { sanitizeCategory } from "../../utils";
import routes from "../../routes";

type SearchBarProps = {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  searchData: Product[] | null;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  handleSearch,
  searchTerm,
  searchData,
}) => {
  const navigate = useNavigate();
  const hasSearchSuggestions =
    searchTerm && searchData && searchData.length > 0;

  const handleSelectOption = (selectedOption: SingleValue<OptionType>) => {
    console.log(selectedOption);
  };

  const handleSetCategory = (
    e: React.MouseEvent<HTMLSpanElement>,
    queryCategory: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`${routes.products}?category=${sanitizeCategory(queryCategory)}`);
  };

  return (
    <form className="flex gap-2 w-full">
      <div className="w-full relative">
        <input
          type="search"
          className="w-full py-2 pl-10 placeholder:text-gray-400 border-[1px] border-solid border-gray-400
           focus:shadow-none focus:outline-none rounded-3xl"
          placeholder="Search for anything"
          value={searchTerm}
          onChange={handleSearch}
        />
        <CiSearch
          size={20}
          className="text-gray-400 absolute left-3 top-[0.7rem]"
        />

        <div className="absolute top-[0.15rem] right-[0.15rem] text-xs h-full w-[25%] text-gray-600">
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                border: "none",
                borderLeft: "1px solid #a7a7a7",
                borderRadius: "24px",
              }),
            }}
            defaultValue={categoriesList[0]}
            options={categoriesList}
            onChange={handleSelectOption}
            className="z-10 bg-none"
          />
        </div>

        {hasSearchSuggestions && (
          <div
            className={`absolute top-[2.7rem] w-full border-solid border-[1px] bg-white z-[3] ${
              hasSearchSuggestions && "border-gray-400 rounded-2xl"
            }`}
          >
            {searchData.map((data) => (
              <Link to={`/product/${data.id}`} key={data.id}>
                <div className="flex justify-between px-5 py-3 hover:bg-gray-100 hover:text-blue-600">
                  <span className="text-sm font-normal line-clamp-1 w-[75%]">
                    {data.name}
                  </span>
                  <span
                    className="text-xs font-bold text-gray-400 hover:underline"
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => {}}
                    onClick={(e) => handleSetCategory(e, data.categories[1])}
                  >
                    {data.categories[1]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white text-center px-12 text-sm rounded-3xl border-none"
      >
        Search
      </button>
    </form>
  );
};
