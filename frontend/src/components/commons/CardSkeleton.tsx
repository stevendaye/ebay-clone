import React from "react";
import Skeleton from "react-loading-skeleton";

export const CardSkeleton: React.FC = () => {
  const mocks = [1, 2, 3, 4, 5];

  return (
    <>
      {mocks.map((item) => (
        <div key={item} className="w-full">
          <Skeleton className="w-full h-72 mb-3" />
          <Skeleton className="w-full h-4" count={2} />
          <div className="flex justify-between">
            <Skeleton className="w-[25px] h-4" />
            <Skeleton className="w-[25px] h-4" />
          </div>
        </div>
      ))}
    </>
  );
};
