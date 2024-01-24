import React from "react";
import HeroImage from "../assets/heroImage.png";
import bg from "../assets/bg.jpg";
import about from "../assets/about.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Home.css";
import home from "../assets/home.gif";
import TypeAnimation from "react-type-animation";
import Type from "./Type";
import Highlight from "./Highlight";

const Home = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`, // Replace `bg` with the correct path to your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundImageStyle}>
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg w-full mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full w-[200%] gap-y-8 ml-[-70px]">
            <h1 className=" text-white flex text-6xl font-semibold">
              Hi There!{" "}
              <span>
                👋🏻
              </span>
            </h1>

            <h1 className="text-white flex text-6xl gap-3 font-semibold">
              <span className="mr-2">I am</span>
              <Highlight text={"Vibhav Sachan"} />
            </h1>

            <div className="text-white text-6xl font-semibold">
              <Highlight text={<Type />} />

            </div>


            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-richblue-200 to-richblue-500 cursor-pointer mt-10	"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          {/* <div className="lg:w-[130%]">
            <img
              src={about}
              alt="my profile"
              className="ml-40"
            />
          </div> */}
        </div>
      </div>
    </div>

  );
};

export default Home;
