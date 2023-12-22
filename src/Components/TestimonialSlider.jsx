import React, { useState, useEffect } from 'react';
import Testimonials from './Testimonials';

const TestimonialSlider = ({ testimonialsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [testimonialsData]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const translateValue = -activeIndex * 100; // Adjust as needed

  return (
    <div className='testimonial-slider'>
      <div className='slider-container  ' style={{ transform: `translateX(${translateValue}%)` }}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='slide p-5 h-80'>
            <Testimonials {...testimonial} />
          </div>
        ))}
      </div>
      <div className='dots-container '>
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`dot  ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
