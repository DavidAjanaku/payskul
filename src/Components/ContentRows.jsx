import React from "react";

export default function ContentRows({title, paragraph, svgPath, textColor}) {
  return (
    <div>
      <div className={`content-row flex flex-col mb-10  ${textColor}`}>
        <div className="headline flex items-center justify-center space-x-3">
          <svg
            class="ic-round-restaurant-menu"
            width="32"
            height="63"
            viewBox="0 0 32 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
                       <path d={svgPath} fill="#FC4746"></path>

          </svg>

          <div className="title font-bold text-2xl">{title}</div>

        </div>
        <div className="paragraph mt-5 font-medium text-center">
        {paragraph}

        </div>
      </div>
    </div>
  );
}
