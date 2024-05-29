import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgUrl} alt={name} className="w-[280px] h-[280px] cursor-pointer hover:scale-110 transition-all ease-in" />
      <div className="mt-8 flex justify-start gap-2">
        <img src={star} alt="rating" width={24} height={24}  />
        <p className="font-montserrat leading-normal text-slate-gray text-xl">
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">
        {name}
      </h3>
      <p className="text-coral-red text-1xl font-montserrat">{price}</p>
    </div>
  );
};

export default PopularProductCard;
