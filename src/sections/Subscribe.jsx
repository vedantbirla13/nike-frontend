import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className=" flex justify-between items-center flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl font-palanquin leading-[68px] lg:max-w-md font-bold text-center">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col md:border lg:border border-slate-gray gap-5 p-2.5 rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
