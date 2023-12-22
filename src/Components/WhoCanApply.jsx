import React from "react";
import Iphone from "../assets/Group 17.svg";


import IphoneCase from "../assets/main.png";

export default function WhoCanApply({title, description}) {
  return (
    <div>
      <div className="border-purple-600 w-full h-80 md:max-w-xs rounded-3xl border-[1px] relative overflow-hidden ">
        <div className="flex flex-col h-full">
          <div className="flex flex-col p-3  pb-5 text-sm">
            <span className="text-start font-medium">{title}</span>
            <span className="text-start">{description}</span>
          </div>
          <div className="w-full h-full relative bg-primaryy">
            <img
              className="w-full absolute px-10 pt-10"
              src={Iphone}
              alt=""
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
