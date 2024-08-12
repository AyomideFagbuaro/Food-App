import React from "react";
import Food from "./Food";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";

const fadeinAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: function (index) {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 * index, // Increased delay to make the animation slower
        duration: 1, // Added duration to slow down the animation
      },
    };
  },
};

const Menu = () => {
  return (
    <div className="py-14 px-10 items-center">
      <h1 className="text-[#662549] text-center font-bold text-6xl">
        Our Menu
      </h1>
      <div>
        <ul className="md:flex flex-wrap justify-between items-center py-12">
          {Food.map((food, index) => (
            <motion.li
              key={food.id}
              variants={fadeinAnimationsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="lg:w-[30%] mx-auto w-[300px] bg-[rgba(174,68,90,0.8)] h-96 rounded-2xl mt-36 py-12 relative cursor-pointer"
            >
              <div className="w-[200px] h-[200px] bg-[#662549] rounded-full mx-auto absolute flex items-center justify-center top-[-100px] right-0 left-0">
                <img
                  src={food.image}
                  alt=""
                  className="w-[185px] transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="absolute top-32">
                <h2 className="text-[#662549] text-2xl font-semibold text-center">
                  {food.heading}
                </h2>
                <ul className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i} className="text-[#F39F5A] text-4xl">
                      <IoIosStar />
                    </li>
                  ))}
                </ul>
                <p className="text-center text-base px-2 py-2">
                  {food.paragraph}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
