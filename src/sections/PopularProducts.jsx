import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl ">
           <span className="text-coral-red">Classics</span> Spotlight
        </h2>
        <p className="text-slate-gray lg:max-w-lg mt-2 font-montserrat">
          Experience top notch quality and style with our sought after
          selections. Discover a world of comfort, design and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <PopularProductCard
            imgUrl={product.imgURL}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
