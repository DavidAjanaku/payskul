import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Photo from '../assets/photo.svg';
import useIntersectionObserver from './useIntersectionObserver';

export default function SectionOne() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  return (
    <div className={`py-10 section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="md:flex justify-center items-center flex-wrap w-full">
      <div className={`md:w-2/5 transition-transform duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[60px] opacity-0'}`}>
          <img src={Photo} className="" alt="" />
        </div>
        <div className={`md:w-2/5 transition-transform duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150px] opacity-0'}`}>
          <div className="text-content flex flex-col justify-between space-y-5">
            <div className="headline font-semibold text-2xl md:text-left tracking-wider">
              We focus on financial services <br />
              <br />
              and helping you finish your <br />
              <br />
              academic journey.
            </div>
            <div className="sub-headline font-semibold text-base tracking-wider mt-7 md:text-left">
              Most loan apps are designed for personal or business loans.
              <br />
              Payskul is designed for everyone who is searching for a loan
              <br />
              to enable them to cross the finish line in their academic journey.
            </div>
            <div className="link text-customText3 text-lg md:text-left">
              <Link to="/learn-more">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
