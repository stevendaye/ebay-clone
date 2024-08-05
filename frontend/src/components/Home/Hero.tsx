import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRightLong, FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes";
import {
  highlightProductsRoad,
  highlightProductsLuxury,
} from "../../static/init";
import { sanitizeCategory } from "../../utils";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const swiperRef = useRef<SwiperClass | null>(null);
  const [play, setPlay] = useState<boolean>(true);

  const handleStopSlide = () => {
    swiperRef.current?.autoplay.stop();
  };

  const handleResumeSlide = () => {
    swiperRef.current?.autoplay.start();
  };

  useEffect(() => {
    play ? handleResumeSlide() : handleStopSlide();
  }, [play]);

  const handleHeroLink = (pageURL: string) => {
    navigate(`${routes.products}?category=${sanitizeCategory(pageURL)}`);
  };

  return (
    <section className="w-full h-[22rem] rounded-xl overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="Swiper relative"
      >
        <SwiperSlide
          onMouseEnter={handleStopSlide}
          onMouseLeave={handleResumeSlide}
        >
          <div className="swiper-1 w-full h-[22rem]">
            <div className="flex flex-col gap-2 pt-8 pl-8">
              <h1 className="w-60 text-blue-950 text-3xl font-bold">
                Your treasure island awaits
              </h1>
              <p className="w-80 text-blue-950">
                Set sails for high adventure with boats parts on eBay
              </p>
              <button
                className="w-36 rounded-full py-2 px-4 border-solid border-[1px] border-blue-950
              text-blue-950 mt-3 hover:bg-blue-950 hover:text-white ease-in-out"
                onClick={() => handleHeroLink("Boats Parts & Accessories")}
              >
                Hop on board
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          onMouseEnter={handleStopSlide}
          onMouseLeave={handleResumeSlide}
        >
          <div className="swiper-2 w-full h-[22rem]">
            <div className="flex gap-2 pt-8 pl-8 h-full">
              <div className="flex flex-col ">
                <h1 className="w-80 text-black text-3xl font-bold">
                  Unique savings on luxury fashion
                </h1>
                <p className="w-80 text-black">
                  Your purchases are backed by the eBay Money Back Guarantee.
                </p>
                <button
                  className=" w-44 rounded-full py-2 px-4 border-solid border-[1px] border-black
                text-black mt-3 hover:bg-black hover:text-white ease-in-out"
                  onClick={() => handleHeroLink("Jewelry & Watches")}
                >
                  Code: BOLDER07
                </button>

                <Link
                  to={routes.promo}
                  className="text-xs underline mt-auto mb-10"
                >
                  *Min. spend $300. Max. discount $100
                </Link>
              </div>

              <div className="flex gap-20 justify-center items-center flex-1 h-full mt-[-5px]">
                {highlightProductsLuxury.map((h_prod_lux) => (
                  <Link
                    to={`${routes.products}?category=${sanitizeCategory(
                      h_prod_lux.title
                    )}`}
                    key={h_prod_lux.id}
                    className="flex flex-col items-center"
                  >
                    <span className="bg-black px-4 py-1 rounded-md text-white mb-2">
                      {h_prod_lux.discount}%*
                    </span>
                    <article className="w-36 h-36">{h_prod_lux.image}</article>
                    <span className="font-bold">{h_prod_lux.title}</span>
                    <FaArrowRightLong size={35} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          onMouseEnter={handleStopSlide}
          onMouseLeave={handleResumeSlide}
        >
          <div className="swiper-3 w-full h-[22rem]">
            <div className="flex flex-col gap-2 pt-8 pl-8 w-96 h-full bg-[#f7f7f7] float-right">
              <h1 className="w-80 text-black text-3xl font-bold">
                Feel special this summer with 15% off*
              </h1>
              <p className="w-80 text-black">
                Save on luxury jewelry, watches and handbags for you.
              </p>
              <button
                className=" w-44 rounded-full py-2 px-4 border-solid border-[1px] border-black
                text-black mt-3 hover:bg-black hover:text-white ease-in-out"
                onClick={() => handleHeroLink("Luxurious Acessories")}
              >
                Code: BOLDER07
              </button>

              <Link
                to={routes.promo}
                className="text-xs underline mt-auto mb-10 mr-12 text-right"
              >
                *Min. spend $300. Max. discount $100
              </Link>
            </div>
          </div>
          <div className=" clear-both" />
        </SwiperSlide>

        <SwiperSlide
          onMouseEnter={handleStopSlide}
          onMouseLeave={handleResumeSlide}
        >
          <div className="swiper-4 w-full h-[22rem]">
            <div className="flex gap-2 pt-8 pl-8 h-full">
              <div className="flex flex-col ">
                <h1 className="w-80 text-blue-950 text-3xl font-bold">
                  On the road in comfort and style
                </h1>
                <p className="w-80 text-blue-950">
                  Equip your vehicle for the adventure of a lifetime.
                </p>
                <button
                  className=" w-28 rounded-full py-2 px-4 border-solid border-[1px] border-blue-950
                  text-blue-950 mt-3 hover:bg-blue-950 hover:text-white ease-in-out"
                  onClick={() => handleHeroLink("Car Parts & Acessories")}
                >
                  Shop now
                </button>
              </div>

              <div className="flex gap-20 justify-center items-center flex-1 h-full mt-[-5px]">
                {highlightProductsRoad.map((h_prod_road) => (
                  <Link
                    to={`${routes.products}?category=${sanitizeCategory(
                      h_prod_road.title
                    )}`}
                    key={h_prod_road.id}
                    className="flex flex-col items-center"
                  >
                    <article className="w-36 h-36 flex justify-center items-center">
                      {h_prod_road.image}
                    </article>
                    <span className="font-bold w-48 text-center">
                      {h_prod_road.title}
                    </span>
                    <FaArrowRightLong size={35} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {play ? (
          <FaCirclePause
            className="absolute bottom-3 right-4 z-[1] cursor-pointer"
            size={30}
            onClick={() => setPlay(!play)}
            fill="black"
          />
        ) : (
          <FaCirclePlay
            className="absolute bottom-3 right-4 z-[1] cursor-pointer"
            size={30}
            onClick={() => setPlay(!play)}
            fill="black"
          />
        )}
      </Swiper>
    </section>
  );
};
