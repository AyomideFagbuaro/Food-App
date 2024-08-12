import React from "react";
import Logo from "../assets/Logo2.svg";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaRegCopyright,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#190019] py-4 px-10">
      <div className="lg:flex justify-between mb-8 flex-wrap ">
        <div className="lg:w-80 w-full p-">
          <img src={Logo} alt="" className="lg:w-48  mx-auto" />
          <p className="text-white text-center">
            Rex Food provides gourmet meals made with high-quality ingredients,
            offering a delicious and convenient culinary experience.
          </p>
        </div>
        <div className="lg:w-80 pt-8 w-full">
          <h2 className="text-4xl text-white text-center font-semibold">
            Location
          </h2>
          <div className="text-white py-2 items-center justify-center flex text-xl">
            {" "}
            <FaLocationDot className="w-16" />{" "}
            <p>
              <span className="text-[#A4A64E]">60. Airport Road</span>
              <br className="hidden md:" /> Warri, Delta State
            </p>
          </div>
        </div>
        <div className=" pt-8">
          <h2 className="text-white text-4xl text-center font-semibold">
            <span className="text-[#A4A64E] ">Contact</span> Us
          </h2>
          <ul className="text-white py-4">
            <li className="flex gap-4 text-xl justify-center items-center">
              <FaPhoneAlt /> +234-9138174020
            </li>
            <li className="flex gap-4 text-xl mt-4 justify-center items-center">
              <IoMdMail /> rexfood@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="lg:flex justify-between py-8 flex-wraps">
        <p className="text-white flex items-center justify-center gap-2 text-2xl w-[200] mb-11">
          <FaRegCopyright /> Fabz Dev {currentYear}
        </p>
        <ul className="flex gap-8 justify-center">
          <li className="text-white text-3xl">
            <FaFacebook />
          </li>
          <li className="text-white text-3xl">
            <FaInstagram />
          </li>
          <li className="text-white text-3xl">
            <FaXTwitter />
          </li>
          <li className="text-white text-3xl">
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
