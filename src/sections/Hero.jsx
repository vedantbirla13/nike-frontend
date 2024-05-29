import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-coral-red ">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin lg:text-8xl max-sm:text-[60px] font-bold max-sm:leading-[82px] xl:whitespace-nowrap relative z-10 pr-10">
          <span>The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start gap-16 flex-wrap w-full mt-16 ">
          {statistics.map((stats, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="text-slate-gray leading-7 font-montserrat">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" relative flex flex-1 justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center max-xl:py-40">
        <img
          src={bigShoeImg}
          alt="shoes"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
        <div className="absolute flex  gap-4 -bottom-[8%] sm:left-[13%] max-sm:px-6 ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
