import React, { useState, useEffect } from "react";
import IphoneBoard from "../assets/Group 16.svg";

import Iphone from "../assets/Group 12.svg";
import IphoneCase from "../assets/Group 14.svg";
import IphoneCase2 from "../assets/Group 17.svg";
import IphoneCase3 from "../assets/Group 11.svg";


const HeroSlider = () => {
  const images = [IphoneBoard,IphoneCase2, IphoneCase, Iphone,IphoneCase3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="hero-slider-container overflow-hidden  relative h-full max-w-[600px]  mx-auto">
      <div className="hero-slider relative mx-auto" style={{ overflow: "hidden" }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image-container w-full h-full`}
            style={{
              transform: `translateY(-${currentIndex * 100}%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            <img
              src={image}
              className="md:w-[600px] md:h-[600px] w-[700px] h-[700px] py-10 object-contain"
              alt=""
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HeroSlider;
