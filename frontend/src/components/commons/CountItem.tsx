import React, { useState } from "react";

type CountItemProps = {
  inStock: number;
};

export const CountItem: React.FC<CountItemProps> = ({ inStock }) => {
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    count < inStock && setCount((count) => count + 1);
  };
  const decrement = () => {
    count > 1 && setCount((count) => count - 1);
  };

  return (
    <div className="flex items-center ml-auto font-bold">
      <button
        disabled={count === 1}
        className={`px-[8.5px] py-[2.5px] bg-black text-xs text-white rounded-[3px] ${
          count === 1 && "disabled:bg-[#eee] disabled:text-[#aaa]"
        }`}
        onClick={decrement}
      >
        -
      </button>
      <span className="flex w-5 justify-center">{count}</span>
      <button
        className={`px-[6px] py-[2px] bg-black text-xs text-white rounded-[3px] ${
          count === inStock && "disabled:bg-[#eee] disabled:text-[#aaa]"
        }`}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
