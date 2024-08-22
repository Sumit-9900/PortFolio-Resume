import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menubar, setMenubar] = useState(false);
  const handleMenubar = () => setMenubar(!menubar);

  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <p className=" text-4xl text-gray-300 italic">
          𝓐 <span className="text-blue-700">𝓟</span>
        </p>
      </div>

      {/* menu */}

      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleMenubar} className=" md:hidden z-10 duration-300">
        {menubar ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !menubar
            ? " hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center duration-300"
        }
      >
        <li className=" py-4 text-2xl">Home</li>
        <li className=" py-4 text-2xl">About</li>
        <li className=" py-4 text-2xl">Skills</li>
        <li className=" py-4 text-2xl">Projects</li>
        <li className=" py-4 text-2xl">Contact</li>
      </ul>

      {/* Social icon */}
      <div className=" hidden"></div>
    </div>
  );
}

export default Navbar;
