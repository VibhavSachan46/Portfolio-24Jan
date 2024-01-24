import React from "react";
import about from "../assets/about.png"
import Highlight from "./Highlight";
import github from "../assets/github2.png"
import leetcode from "../assets/leetcode.jpg"
import gfg from "../assets/gfg4.png"



const About = () => {

  const profiles = [
    {
      id: 1,
      src: github,
      href: "https://github.com/VibhavSachan46",
    },
    {
      id: 2,
      src: gfg,
      href: "https://auth.geeksforgeeks.org/user/vibhavsachan743/practice",
    },
    {
      id: 3,
      src: leetcode,
      href: "https://leetcode.com/vibhavsachan743/",
    },
  ];
  return (
    <div name="about" className="bg-gradient-to-b from-black to-richblack-900 w-full text-white md:h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col text-5xl text-white mt-[100px] px-46 items-center justify-center max-w-screen-lg">
          <div className='text-center text-4xl font-semibold mt-7 tracking-widest	'>
            <Highlight text={"Code"} /> is like humor. When you have to explain it, it's bad.
            <br />
            <Highlight text={"– Cory "} /> House
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-12 sm:px-0 mt-[80px]">
            {profiles.map(({ id, src, href }) => (
              <div key={id} className=" rounded-lg transform transition-transform duration-300 ease-in-out bg-white hover:scale-110 shadow-xl shadow-richblack-200"  

              >
                <a
                    href={href} target="_blank">
                    <img
                      src={src}
                      alt=""
                      className="rounded-xl duration-200 cursor-pointer h-[240px] p-1 "
                    />
                  </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
