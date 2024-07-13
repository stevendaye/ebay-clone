import React from "react";

import styles from "../styles";
import { Footer, Header } from "../layouts";
import {
  CarouselListing,
  DiscountBarner,
  DisplayBarner,
  Events,
  FeaturedProducts,
  Hero,
  NavCategories,
  PopularCategories,
} from "../components/Home";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-1 mb-14">
        <div className={`${styles.section} flex flex-col`}>
          <NavCategories />
          <Hero />
          <DiscountBarner />
          <FeaturedProducts />
          <PopularCategories />
          <DisplayBarner />
          <Events />
          <CarouselListing />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
