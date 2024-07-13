import React from "react";
import { Header } from "../layouts";
import styles from "../styles";
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  console.log("productId:", productId);

  return (
    <>
      <Header />
      <div className="w-full mb-14 mt-5">
        <div className={`${styles.section} flex flex-col`}>Details Page</div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
