// Testimonials.js
import React from "react";
import image from "../assets/dummy image.svg";

const Testimonials = ({ firstName, lastName, content }) => {
  return (
    <div className="testimonial">
      <div className="flex flex-wrap md:flex-nowrap w-full items-center bg-white p-7 py-14 rounded-2xl">
        <div className="flex items-center md:w-1/2 justify-center">
          <div className="  p-1 rounded-full ">
            <img src={image} className="w-20" alt="" />
          </div>
          <div className="flex flex-col  text-start">
            <span className="font-bold text-lg">{firstName}</span>
            <span className=" text-gray-500">{lastName}</span>
          </div>
        </div>
        <div className="border-r-2 h-20  pl-5 hidden md:block"></div>
        <div className="md:w-1/2">{content}</div>
      </div>
    </div>
  );
};

export default Testimonials;
