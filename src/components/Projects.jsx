import React from "react";
import workImg from "../Assets/workImg.jpeg";
import realestate from "../Assets/realestate.jpg";

function Projects() {
  return (
    <div
      name="projects"
      className=" bg-[#0a192f] w-full md:h-screen text-gray-300 lg:pb-8"
    >
      <div className=" max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center p-4 lg:px-24">
        <div className=" pt-20 lg:py-8">
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Projects
          </p>
          <p className=" py-6">Check out some of my recent projects</p>
        </div>
        {/* Card container */}
        <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-xl text-white font-bold tracking-wider">
                full-stack application
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                React application
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                React application
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                React application
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                React application
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                React application
              </span>
              <div className=" pt-8 text-center">
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className=" text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
