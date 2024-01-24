import React from "react";
import google from "../assets/projects/googleBanner.jpg"
import blog from "../assets/projects/blogBanner.jpg"
import todo from "../assets/projects/todoBanner.jpg"
import sn from "../assets/projects/SN.jpg"
import file from "../assets/projects/file.jpeg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: google,
      title: "Google Search",
      discription: "Created a Google-like search website using ReactJS and Tailwind CSS. ",
      href: "https://gooogle-search-app.netlify.app/",
      tech: "ReactJs, Tailwind CSS, JavaScript",
    },
    {
      id: 2,
      src: blog,
      title: "Blog",
      href: "https://github.com/VibhavSachan46",
      discription: "Developed a full-stack web app using MongoDB, Node.js, and Express.js for the backend, and React for the frontend.",
      href: "https://github.com/VibhavSachan46/Blog-MERN",
      tech: "ReactJs, NodeJS, ExpressJs, MongoDb, JWT,  JavaScript",
    },
    {
      id: 3,
      src: todo,
      title: "To-Do",
      discription: "In this app user can create, update, mark and delete task in real time.",
      href: "https://github.com/VibhavSachan46/Todo",
      tech: "ReactJs, Tailwind CSS, JavaScript",
    },
    {
      id: 4,
      src: sn,
      title: "Study Notion",
      discription: "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate ducational content.",
      href: "https://github.com/VibhavSachan46/StudyNotion",
      tech: "ReactJs, Tailwind CSS, ExpressJs, NodeJs, MongoDb, Cloudinary",
    },
    {
      id: 5,
      src: file,
      title: "File Sharing",
      discription: "Nodejs and Expressjs backend application to efficiently store, manage, and retrieve images and videos.",
      href: "https://github.com/VibhavSachan46/FileUpload-Backend",
      tech: "NodeJs, ExpressJS, Cloudinary, MongoDb, JavaScript",
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-richblack-900 lg:w-full lg:h-full text-richblack-25 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8 mt-16 mb-[30px]">
          <p className="text-5xl font-semibold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:gap-16 sm:px-0">
          {portfolios.map(({ id, src, title, discription, href, tech }) => (
            <a
              href={href} target="_blank" className="shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div key={id} className="bg-richblack-800 rounded-2xl p-4 cursor-pointer h-[380px] shadow-lg shadow-white "
              >
                <div className="text-center mb-[10px] text-xl font-semibold text-white">
                  {title}
                </div>

                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200  mb-[20px]"
                />

                <div className="text-mid font-semibold mb-[10px] text-left text-white">
                  {tech}
                </div>
                <div className=" text-richblack-25 text-left text-mid">
                  <p>
                    {discription}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Portfolio;



// grayscale-[50%] shadow-md shadow-gray-600 rounded-lg hover:scale-105 hover:filter-none transform transition-transform duration-330 ease-in-out bg-richblack-600"