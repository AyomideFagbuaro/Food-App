import React from "react";
import plantain from "../assets/plantain.png";

const About = () => {
  return (
    <div className="py-14 px-10 items-center">
      <h1 className="text-[#2B124C] font-bold text-center py-10 text-6xl">
        About <span className="text-[#F39F5A]">Us</span>
      </h1>
      <div className="lg:md:flex justify-between items-center">
        <div className="lg:md:w-[35%] flex items-center justify-center py-12">
          <img src={plantain} alt="" className="lg:md:max-w-sm max-w-xs" />
        </div>
        <div className="lg:md:w-[45%]">
          <p className="m-2">
            Rex Food is a charming and welcoming restaurant located in the heart
            of Warri, Delta State. With its warm and inviting ambiance, it's a
            favorite among locals and visitors alike. Here's more information
            about this fictional establishment:
          </p>
          <p className="m-2">
            Rex Food specializes in a fusion of traditional Nigerian and
            international cuisine, offering a diverse menu that caters to a wide
            range of tastes. You can find delicious Nigerian staples like jollof
            rice, egusi soup, and suya alongside international favorites like
            burgers, pasta, and salads.
          </p>
          <p className="m-2">
            The restaurant features a tastefully decorated interior with a mix
            of traditional African elements and modern design. The comfortable
            seating arrangements make it an excellent choice for both casual
            family dinners and special occasions. There's also a lovely outdoor
            patio area where guests can dine al fresco.
          </p>
          <div className="m-2">
            <button
              className="bg-[#F39F5A] text-[#FBE4D8] px-4 py-2 rounded-lg
          text-center m-5 transition-transform duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
