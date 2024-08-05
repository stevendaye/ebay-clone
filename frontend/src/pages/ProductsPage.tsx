import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header, { Product } from "../layouts/Header";
import styles from "../styles";
import { CardGrid } from "../components/commons/CardGrid";
import { Card } from "../components/commons/Card";
import { products as allProducts } from "../static/init";
import { sanitizeCategory } from "../utils";
import routes from "../routes";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../components/commons/CardSkeleton";
import { allCategories } from "../static/initCategories";

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[] | null>(null);
  const queryCategory = searchParams.get("category");

  useEffect(() => {
    if (!queryCategory) {
      const sortedProducts = [...allProducts].sort(
        (a, b) => a.total_sell - b.total_sell
      );

      setProducts(sortedProducts);
    } else {
      const sanitizedProducts = allProducts.map((product: Product) => ({
        ...product,
        categories: product.categories.map(sanitizeCategory),
      }));

      const filteredProducts = sanitizedProducts.filter((product: Product) =>
        product.categories.includes(queryCategory)
      );

      setProducts(filteredProducts);
    }
  }, [queryCategory]);

  return (
    <>
      <Header />
      <div className="w-full mb-14 mt-5">
        <div className={`${styles.section} flex flex-col`}>
          <div className="flex gap-3 mb-5 text-sm text-gray-500">
            <Link to={routes.products} className="font-bold hover:underline">
              Products
            </Link>
            {queryCategory ? (
              <Link
                to={`${routes.products}?category=${queryCategory}`}
                className="font-normal hover:underline"
              >
                &#62; {queryCategory}
              </Link>
            ) : (
              <span className="font-normal"> &#62; All categories </span>
            )}
          </div>

          <div className="min-h-screen flex">
            <div className="flex gap-10 w-full">
              <aside className="flex flex-col gap-2 sticky top-3 w-[15%] h-screen">
                <h1 className="text-xl font-bold">
                  {!queryCategory ? "All Categories" : queryCategory}
                </h1>

                <div className="flex flex-col gap-2">
                  {allCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`${routes.products}?category=${sanitizeCategory(
                        category.title
                      )}`}
                      className={`text-xs hover:underline hover:font-bold ${
                        queryCategory === sanitizeCategory(category.title)
                          ? "font-bold underline"
                          : "font-normal"
                      }`}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </aside>

              <section className="flex-1">
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
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
