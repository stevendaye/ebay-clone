import React from "react";
import { Card } from "../commons/Card";
import { CardGrid } from "../commons/CardGrid";
import { products } from "../../static/init";

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="w-full flex flex-col mt-12">
      <h3 className="text-xl font-bold">Lifestyle</h3>
      <span className="text-sm text-gray-400 font-bold mb-4">
        Recommended for you
      </span>

      <CardGrid>
        {products.slice(0, 5).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </CardGrid>
    </section>
  );
};
