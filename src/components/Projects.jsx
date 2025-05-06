import React, { useEffect } from "react";
import ytVideoDownloader from "../Assets/yt_video.jpeg";
import MovieApp from "../Assets/MovieApp.jpeg";
import BlogApp from "../Assets/BlogApp.jpeg";
import RentCar from "../Assets/RentCar.jpeg";
import FoodApp from "../Assets/FoodApp.jpeg";
import NewsApp from "../Assets/NewsApp.jpeg";
import Covid19Tracker from "../Assets/Covid19Tracker.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      name="projects"
      className=" bg-[#0a192f] w-full md:min-h-screen text-gray-300 lg:pb-8"
    >
      <div className=" max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center p-4 lg:px-24">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className=" pt-20 lg:py-8"
        >
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Projects
          </p>
          <p className=" py-6">Check out some of my recent projects</p>
        </div>
        {/* Card container */}
        <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {/* Card Item */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${ytVideoDownloader})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <div className=" w-full mx-auto text-2xl text-white font-bold tracking-wider">
                <p className=" text-center">Youtube Video Downloader</p>
              </div>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Sumit-9900/video_downloader"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            style={{
              backgroundImage: `url(${MovieApp})`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-xl text-white font-bold tracking-wider">
                Movie App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Sumit-9900/Movie-Zone"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${BlogApp})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Blog App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Sumit-9900/Blog-App"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${RentCar})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Car Rent App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Sumit-9900/Rent-Car-App"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${FoodApp})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Food App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Sumit-9900/food-app"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${NewsApp})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                News App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Sumit-9900/news_app"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
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
