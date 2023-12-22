import React from "react";

const Card = ({ subtitle, logoPath, paragraph }) => {
  return (
    <div className=" p-10">
      <div className="card  w-fit items-center justify-between">
        <div className="client space-y-4 flex-col">
          <svg
            className="logos-apiary"
            width="79"
            height="81"
            viewBox="0 0 79 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={logoPath} fill="#FC4746"></path>
          </svg>
        </div>
      
      </div>
    </div>
  );
};

export default Card;
