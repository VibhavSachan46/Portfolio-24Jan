import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-richblack-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/bcbb9138-9afc-4306-a8eb-3e0741f38f3f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none tracking-widest"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-4 bg-transparent border-2 rounded-md text-white focus:outline-none tracking-widest"
            />
            <textarea
              name="message"
              placeholder="Enter your message ...."
              rows="10"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none tracking-widest	"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-richblue-200 to-richblue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit Response
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
