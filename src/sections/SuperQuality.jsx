import React from "react";
import Button from "../components/Button";
import { cheveronRight } from "../assets/icons";
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl max-sm:text-[60px] font-bold lg:max-w-lg">
          We provide you {" "}
          <span className="text-coral-red inline-block mt-3">Super</span>
          <br />
          <span className="text-coral-red inline-block mt-3">quality</span>{" "}
          Shoes
        </h2>

        <p className="font-montserrat info-text mt-4 lg:max-w-lg">
          Experience the perfect blend of comfort, style, and quality . Whether
          you’re heading to the office, hitting the gym, or enjoying a night
          out, our shoes will keep you comfortable and confident all day long.

        </p>

        <p className="font-montserrat info-text mt-4 lg:max-w-lg">
                    
        Discover the difference today and step into a world of premium
          comfort.
        </p>
        <div className="mt-10">
          <Button label="View details" iconUrl={cheveronRight} />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="" width={550} height={500} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
