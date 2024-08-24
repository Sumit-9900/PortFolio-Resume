import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className=" bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto px-8 md:px-24 md:pt-28 flex flex-col justify-center h-full">
        <p className=" text-[#D3D3D3]">Hi!👋 my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ajoy Paul
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full-stack Web Developer.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          Dynamic Full-Stack Web Developer, proficient in MERN stack, seeks
          roles in tech innovation. With a BCA and 10+ projects, I excel in
          enhancing user experiences and optimizing performance. Eager to
          contribute strong problem-solving skills in a vibrant development
          setting.
        </p>
        <div>
          <button className=" text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600 duration-300">
            View work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className=" ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
