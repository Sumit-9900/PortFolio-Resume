import React from "react";

function About() {
  return (
    <div name="about" className=" bg-[#0a192f] h-screen w-full text-gray-300">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8 md:px-24">
          <div className=" pb-8 pl-4 sm:text-right">
            <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
        </div>
        <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 md:px-24">
          <div className=" sm:text-right text-4xl font-bold">
            Hi, I'm Sumit, nice to meet you. Please take a look around.
          </div>
          <div>
            As a Flutter Developer with expertise in Flutter/Dart and Clean
            Architecture, I bring strong problem-solving skills and a
            collaborative approach to building scalable mobile applications. I
            am eager to contribute to challenging projects that demand
            innovation, technical excellence, and a commitment to delivering
            impactful user experiences.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
