import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let Links = [
    { name: "Home" },
    { name: "About" },
    { name: "Menu" },
    { name: "Contact" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#FBE4D8] flex py-4 px-10 justify-between items-center z-50 ">
      <div>
        <img src={Logo} alt="Company Logo" className="max-w-40" />
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl py-4 absolute right-8 top-6 cursor-pointer lg:md:hidden text-[#2B124C]"
      >
        <FaBars />
      </div>

      <div
        className={`lg:flex lg:items-center lg:pb-0 pb-12 bg-[#FBE4D8] absolute lg:static lg:z-auto z-1000 left-0 w-full lg:w-auto text-center  lg:pl-0 pl-9 transition-all duration-500 ease-in gap-10  ${
          open ? "top-20 " : "top-[-50vh]"
        }`}
      >
        <ul className="lg:flex">
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 lg:my-0 text-xl my-7 cursor-pointer"
            >
              {link.name}
            </li>
          ))}
        </ul>
        <button className="bg-[#2B124C] text-white px-2 py-2 rounded-md transition-transform duration-300 hover:scale-105">
          Make Reservation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
