import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

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
        <li>
          <Link to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={800}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
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
        <li className=" py-4 text-2xl">
          <Link onClick={handleMenubar} to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li className=" py-4 text-2xl">
          <Link onClick={handleMenubar} to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li className=" py-4 text-2xl">
          <Link
            onClick={handleMenubar}
            to="skills"
            smooth={true}
            duration={800}
          >
            Skills
          </Link>
        </li>
        <li className=" py-4 text-2xl">
          <Link
            onClick={handleMenubar}
            to="projects"
            smooth={true}
            duration={800}
          >
            Projects
          </Link>
        </li>
        <li className=" py-4 text-2xl">
          <Link
            onClick={handleMenubar}
            to="contact"
            smooth={true}
            duration={800}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icon */}
      <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className=" w-[160px] h-[60px] flex justify-between items-center bg-blue-500 ml-[-100px] hover:ml-[10px] duration-500">
            <a
              href="https://www.linkedin.com/in/ajoypaul/"
              target="_blank"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[10px] duration-500">
            <a
              href="https://github.com/ajoy-paul11"
              target="_blank"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[10px] duration-500">
            <a
              href="mailto:ajoypaul8875@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Ajoy,%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out..."
              target="_blank"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[10px] duration-500">
            <a
              href="../Assets/AJOY_RESUME.pdf"
              download="RESUME_AMIT.pdf"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
