import React, { useEffect } from "react";
import Bloc from "../Assets/Bloc.png";
import Dart from "../Assets/Dart.png";
import firebase from "../Assets/firebase.png";
import flutter from "../Assets/flutter.png";
import Hive from "../Assets/Hive.png";
import GitHubIcon from "../Assets/github.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });
  });
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className=" max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center p-4 md:px-24">
        <div data-aos="fade-down">
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className=" py-4">
            These are the technologies I have been working with
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 text-clip gap-4 py-8">
          <div
            data-aos="fade-right"
            className="  shadow-md mix-blend-lighten hover:shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={flutter} alt="html-icon" className="  w-20 mx-auto" />
          </div>
          <div
            data-aos="fade-down-right"
            className=" shadow-md mix-blend-lighten hover:shadow-[#040c16] hover:scale-125 duration-500"
          >
            <img src={Dart} alt="css-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">Dart</p>
          </div>
          <div
            data-aos="fade-down-left"
            className=" shadow-md mix-blend-lighten hover:shadow-[#040c16] hover:scale-125 duration-500"
          >
            <img src={firebase} alt="js-icon" className=" w-20 mx-auto" />
          </div>
          <div
            data-aos="fade-left"
            className=" shadow-md mix-blend-lighten hover:shadow-[#040c16] hover:scale-150 duration-500"
          >
            <img src={Hive} alt="react-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">Hive</p>
          </div>
          <div
            data-aos="fade-right"
            className=" shadow-md mix-blend-lighten hover:shadow-[#040c16] hover:scale-125 duration-500"
          >
            <img src={Bloc} alt="tailwind-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">Bloc</p>
          </div>
          <div
            data-aos="fade-up-right"
            className=" shadow-md mix-blend-lighten hover:shadow-[#040c16] hover:scale-125 duration-500"
          >
            <img src={GitHubIcon} alt="github-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
