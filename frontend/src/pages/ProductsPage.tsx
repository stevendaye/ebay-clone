import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header, { Product } from "../layouts/Header";
import styles from "../styles";
import { CardGrid } from "../components/commons/CardGrid";
import { Card } from "../components/commons/Card";
import { products as allProducts } from "../static/init";
import { sanitizeString } from "../utils";
import routes from "../routes";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../components/commons/CardSkeleton";

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[] | null>(null);
  const category = searchParams.get("category");

  useEffect(() => {
    if (!category) {
      const sortedProducts = [...allProducts].sort(
        (a, b) => a.total_sell - b.total_sell
      );

      setProducts(sortedProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product: Product) =>
          sanitizeString(product.category).toLowerCase() === category
      );
      setProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      <Header />
      <div className="w-full mb-14 mt-5">
        <div className={`${styles.section} flex flex-col`}>
          <div className="flex gap-3 mb-5 text-sm text-gray-500">
            <Link to={routes.products} className="font-bold hover:underline">
              Products
            </Link>
            {category ? (
              <Link
                to={`${routes.products}/category=${category}`}
                className="font-normal hover:underline"
              >
                &#62; {category}
              </Link>
            ) : (
              <span className="font-normal"> &#62; All categories </span>
            )}
          </div>

          {!products && (
            <CardGrid>
              <CardSkeleton />
              <CardSkeleton />
            </CardGrid>
          )}

          <CardGrid>
            {products?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </CardGrid>

          {products?.length === 0 && (
            <p className="mt-5 w-full text-sm text-gray-500 text-center">
              There are no products in this category
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
