import React from "react";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JS from "../Assets/javascript.png";
import ReactIcon from "../Assets/react.png";
import Tailwind from "../Assets/tailwind.png";
import ExpressIcon from "../Assets/express.png";
import NodeIcon from "../Assets/node.png";
import MongoDBIcon from "../Assets/mongo.png";
import GitHubIcon from "../Assets/github.png";
import Appwrite from "../Assets/Appwrite.png";

function Skills() {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className=" max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center p-4 md:px-24">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className=" py-4">
            These are the technologies I have been working with
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 text-clip gap-4 py-8">
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="html-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">HTML</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="css-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">CSS</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JS} alt="js-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">JavaScript</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactIcon} alt="react-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">React JS</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="tailwind-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">Tailwind</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={ExpressIcon}
              alt="express-icon"
              className=" w-20 mx-auto"
            />
            <p className=" py-4 text-center">Express JS</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={NodeIcon} alt="node-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">NodeJS</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={MongoDBIcon} alt="mongo-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">Mongo DB</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={GitHubIcon} alt="github-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">GitHub</p>
          </div>
          <div className=" shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Appwrite} alt="express-icon" className=" w-20 mx-auto" />
            <p className=" py-4 text-center">Appwrite </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
