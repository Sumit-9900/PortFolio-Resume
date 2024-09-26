import React from "react";
import bookstore from "../Assets/bookstore.png";
import blogapp from "../Assets/blogapp.png";
import REST from "../Assets/REST.png";
import Todo from "../Assets/Todo.png";
import QRcode from "../Assets/QRcode.png";
import pokemon from "../Assets/pokemon.png";

function Projects() {
  return (
    <div
      name="projects"
      className=" bg-[#0a192f] w-full md:min-h-screen text-gray-300 lg:pb-8"
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
            style={{
              backgroundImage: `url(${bookstore})`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-xl text-white font-bold tracking-wider">
                BookStore Application
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://book-store-project-jjg2.onrender.com"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/Book-Store-Project"
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
            style={{ backgroundImage: `url(${blogapp})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Blog App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://blog-app-roan-three.vercel.app"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/Blog-App"
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
            style={{ backgroundImage: `url(${REST})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                REST API
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://github.com/Ajoy-paul11/Query-site"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/REST-API"
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
            style={{ backgroundImage: `url(${Todo})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Todo
              </span>
              <div className=" pt-8 text-center">
                <a href="https://todo-manage.vercel.app" target="_blank">
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/TodoUsingContextAPI"
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
            style={{ backgroundImage: `url(${pokemon})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Currency Converter
              </span>
              <div className=" pt-8 text-center">
                <a href="/" target="_blank">
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/Pokemon-Cards"
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
            style={{ backgroundImage: `url(${QRcode})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                QR Code Generator
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://qr-code-generator-bhz.pages.dev"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/QR-code-generator"
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
