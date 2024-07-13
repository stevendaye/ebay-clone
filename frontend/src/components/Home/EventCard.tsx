import React, { useEffect, useState } from "react";
import { Product } from "../../layouts/Header";
import { Countdown } from "../commons/Countdown";
import styles from "../../styles";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

type EventCardProps = {
  event: Product;
};

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleAddToCart = (name: string) => {
    console.log(`Product ${name} added successfully to cart`);
  };

  const handleViewDetails = (eventId: string) => {
    navigate(`${routes.product}/${eventId}`);
  };

  useEffect(() => {
    const storedEndDate = localStorage.getItem("endDate");
    if (storedEndDate) {
      setEndDate(new Date(storedEndDate));
    } else {
      const newEndDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      localStorage.setItem("endDate", newEndDate.toString());
      setEndDate(newEndDate);
    }
  }, []);

  return (
    <div className="w-full flex gap-10 rounded-lg p-7 bg-slate-100">
      <div className="w-[350px] h-[350px] p-0]">
        <img
          src={event.image_Url[0].url}
          alt="Product Event"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full flex flex-col gap-2 mt-[13px]">
        <h2 className={styles.product_title}>{event.name}</h2>

        <div className="flex gap-2 items-center">
          <StarRatings
            rating={event.rating}
            starRatedColor="#EBAD1C"
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="1px"
          />
          <Countdown endDate={endDate} />
        </div>

        <p className="text-gray-600 text-sm mt-2">{event.description}</p>

        <div className="flex py-2 justify-between">
          <div className="flex gap-2 text-lg">
            <h5 className="font-bold text-yellow-600 line-through">
              ${event.price}
            </h5>
            <h5 className="font-bold">${event.discount_price}</h5>
          </div>

          <span className="pr-3 font-bold text-[17px] text-[#44a55e]">
            {event.total_sell} Sold
          </span>
        </div>

        <div className="mt-auto ml-auto flex gap-2 border-solid border-2">
          <button
            className="bg-black text-white text-sm rounded-md py-2 px-5 hover:underline"
            onClick={() => handleViewDetails(event.id.toString())}
          >
            View details
          </button>
          <button
            className="bg-black text-white text-sm rounded-md py-2 px-5 hover:underline"
            onClick={() => handleAddToCart(event.name)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
