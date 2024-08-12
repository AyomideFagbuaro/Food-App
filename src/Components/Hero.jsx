import React from "react";
import image from "../assets/HeroImg.png";

const Hero = () => {
  return (
    <div className="bg-[#FBE4D8] md:py-8 py-24 px-10  md:flex  md:justify-between items-center mt-[-65px]">
      <div className="md:w-[40%] ">
        <h1 className="lg:md:text-3xl text-2xl font-bold">
          COME & GET THE BEST FOOD WARRI HAS TO OFFER
        </h1>
        <p className="lg:md:text-lg text-base">
          Come and get the best food Warri has to offer! From sizzling street
          delicacies to mouthwatering traditional dishes, Warr's vibrant
          culinary scene promises an unforgettable taste adventure. Treat
          yourself to the rich flavors and authentic tastes that make every meal
          here a true feast for the senses.
        </p>
      </div>
      <div className="flex  py-12">
        <img src={image} alt="" className="md:max-w-xs" />
      </div>
    </div>
  );
};

export default Hero;
