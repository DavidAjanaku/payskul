import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between p-8 md:hidden">
      <div className="flex items-center">
        <svg
          className="payskul-logo"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.2623 5.63131L7.16094 12.0838C6.04982 12.4389 5.00929 12.9424 4.07691 13.5762C0.505925 16.0027 -0.900826 19.938 0.586002 23.3666C1.04804 24.4171 1.75528 25.3732 2.66324 26.1747C3.5712 26.9762 4.66023 27.6058 5.86186 28.024C8.39487 28.9257 11.2205 28.9896 13.804 28.2035L13.9063 28.1706L21.5233 21.03L22.7959 19.8365L11.9396 23.321C10.8784 23.6706 9.7045 23.6592 8.65264 23.2891C8.16488 23.1211 7.72325 22.8658 7.35645 22.5398C6.98965 22.2139 6.70588 21.8245 6.52357 21.3971C5.79044 19.6372 7.02135 17.6169 9.27323 16.8953L35 8.63451L31.33 0L27.2623 5.63131Z"
            fill="#B800CC"
          ></path>
          <path
            d="M34.1368 11.9772C31.6068 11.0748 28.7837 11.0101 26.2025 11.7952L26.0943 11.8272L21.2311 16.3778L17.1352 20.189L28.0649 16.6829C29.125 16.3329 30.2983 16.3443 31.3492 16.7148C31.8371 16.8825 32.279 17.1375 32.646 17.4632C33.0131 17.7889 33.2972 18.1781 33.4799 18.6054C34.2131 20.3662 32.9821 22.3856 30.7302 23.1071L5 31.3655L8.66631 40L12.7325 34.3701L32.8382 27.9172C33.949 27.5614 34.9894 27.0579 35.9223 26.4248C39.4934 23.997 40.9002 20.0631 39.415 16.6335C38.9527 15.5829 38.2452 14.6269 37.3368 13.8255C36.4284 13.0241 35.3389 12.3948 34.1368 11.9772Z"
            fill="#4B00B7"
          ></path>
        </svg>
        <div className="text-3xl font-bold ml-2">
          <span className="text-customText">PAY</span>
          <span className="text-customText2">SKUL</span>
        </div>
      </div>

      <Hamburger
        size={30}
        color="#000"
        toggled={isOpen}
        toggle={setOpen}
        rounded
      />

      <div
        className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } menu-section bg-white w-[50%] h-full mt-4 p-4 fixed top-0 left-0 z-40 rounded-md shadow-md transition-opacity ease-in-out duration-300`}
      >
        <ul className="list-none p-0 m-0 pt-20">
          <li className="text-xl mb-2 pb-10">
            <Link>Home</Link>
          </li>
          <li className="text-xl mb-2 pb-10">
            {" "}
            <Link>Product</Link>
          </li>
          <li className="text-xl mb-2 pb-10">
            <Link>Features</Link>
          </li>
          <li className="text-xl mb-2 pb-10">
            <Link>Loans</Link>
          </li>
          <li className="text-xl mb-2 pb-10">
            <Link>About</Link>
          </li>
          <li className="text-xl mb-2 pb-10">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
