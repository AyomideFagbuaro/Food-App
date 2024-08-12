import React from "react";
import Stew from "../assets/stew.png";

const Contact = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-20 px-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(25, 0, 25, 0.5), rgba(25, 0, 25, 0.5)), url(${Stew})`,
      }}
    >
      <h1 className="text-center text-[#FBE4D8] font-bold md:text-6xl text-4xl">
        Reservations
      </h1>

      <form>
        <div className="lg:md:flex gap-8 flex-wrap justify-between items-center w-full mx-auto ">
          <div className="py-4 px-4">
            <label
              className="text-[#FBE4D8] md:text-xl text-base"
              htmlFor="Name"
            >
              Name
            </label>
            <br />
            <input
              className="bg-transparent border-b outline-none lg:w-80 w-full text-[#FBE4d8]  py-4 px-2"
              type="text"
              placeholder="Type your name"
            />
          </div>
          <div className="py-8 px-4">
            <label
              className="text-[#FBE4D8] lg:md:text-xl text-base"
              htmlFor="Email"
            >
              Email
            </label>
            <br />
            <input
              className="bg-transparent border-b outline-none lg:w-80 w-full text-[#FBE4d8] py-4 px-2"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="py-8 px-4">
            <label
              className="text-[#FBE4D8] lg:md:text-xl text-base"
              htmlFor="Phone Number"
            >
              Phone Number
            </label>
            <br />
            <input
              className="bg-transparent border-b outline-none lg:w-80 w-full text-[#FBE4d8] py-4 px-2"
              type="number"
              placeholder="Type your Phone No."
            />
          </div>
          <div className="py-8 px-4">
            <label
              className="text-[#FBE4D8] lg:text-xl text-base"
              htmlFor="Date"
            >
              Date
            </label>
            <br />
            <input
              className="bg-transparent border-b outline-none lg:w-80 w-full text-[#FBE4d8] py-2 px-2"
              type="Date"
            />
          </div>
          <div className="py-8 px-4">
            <label
              className="text-[#FBE4D8] lg:md:text-xl text-base"
              htmlFor="TIme"
            >
              Time
            </label>
            <br />
            <input
              className="bg-transparent border-b outline-none lg:w-80 w-full text-[#FBE4d8] py-4 px-2"
              type="time"
              placeholder="Select Time"
            />
          </div>
          <div className="py-8 px-4">
            <label
              className="text-[#FBE4D8] lg:text-xl text-base"
              htmlFor="Person"
            >
              Person
            </label>
            <br />
            <input
              className="bg-transparent border-b outline-none lg:w-80 w-full text-[#FBE4d8] py-4 px-2"
              type="Number"
              placeholder="No. of Person"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-[#FBE4d8] bg-[#190019] px-4 py-2 text-2xl rounded-lg transition-transform duration-300 hover:scale-105"
            type="submit"
          >
            ENTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
