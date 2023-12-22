import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Photo from '../assets/photo2.png';
import useIntersectionObserver from './useIntersectionObserver';

export default function SectionTwo() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextVisible = useIntersectionObserver(textRef, { threshold: 0.3 });
  const isImageVisible = useIntersectionObserver(imageRef, { threshold: 0.3 });

  return (
    <div>
      <div className="flex flex-wrap md: flex-col-reverse md:flex-row md:flex-nowrap items-center bg-secondaryy">
        <div className={`2 md:w-2/3 md:ml-20 transition-transform duration-1000 transform ${isTextVisible ? 'translate-x-0 opacity-100' : '-translate-x-[150px] opacity-0'}`} ref={textRef}>
          <div className="text-content flex flex-col justify-between space-y-5 p-7">
            <div className="headline font-semibold text-2xl text-left tracking-wider text-white">
              We focus on financial services
              and helping you finish your
              academic journey.
            </div>
            <div className="sub-headline font-bold text-sm tracking-wider mt-7 text-left text-white">
              Most loan apps are designed for personal or business loans.
              Payskul is designed for everyone who is searching for a loan
              to enable them cross the finish line in their academic journey.
            </div>
            <div className="link text-customText3 text-lg text-left">
              <Link>LEARN MORE</Link>
            </div>
          </div>
        </div>
        <div className={`1 md:w-2/3 relative transition-transform duration-1000 transform ${isImageVisible ? 'translate-x-0 opacity-100' : '-translate-x-[50px] opacity-0'}`} ref={imageRef}>
          <img src={Photo} className="w-2/3" alt="" />
          <span className="absolute right-0 bottom-0">
            <svg
              className="vector130 "
              width="230"
              height="208"
              viewBox="0 0 230 498"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M251.413 0.928813C297.461 -0.134091 337.222 28.3038 375.06 54.5209C413.739 81.3198 451.04 110.629 471.105 153.146C493.097 199.748 507.484 253.288 492.062 302.449C476.572 351.828 429.534 381.216 389.318 413.865C346.498 448.628 306.573 495.891 251.413 497.82C195.759 499.766 142.608 465.912 106.305 423.76C73.9526 386.195 84.533 330.569 67.3453 284.097C49.0336 234.586 -11.868 194.469 2.74109 143.747C17.2713 93.2983 86.2697 86.3131 131.851 60.1347C171.38 37.4324 205.82 1.98119 251.413 0.928813Z"
                fill="#B800CC"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
