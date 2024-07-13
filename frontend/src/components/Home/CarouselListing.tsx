import React, { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { products } from "../../static/init";
import { Card } from "../commons/Card";

export const CarouselListing: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="mt-12 w-full h-full rounded-xl overflow-hidden">
      <h3 className="text-xl font-bold mb-4">People Like You Loved These</h3>

      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={25}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1040: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="Swiper relative w-full"
      >
        {products
          .slice(0, 10)
          .reverse()
          .map((product) => (
            <SwiperSlide key={product.id} className="mb-10">
              <Card product={product} withCarouselList />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
