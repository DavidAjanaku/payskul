import React from "react";
import frame from "../assets/Frame.svg"
import group from "../assets/group.svg"
import scholarship from "../assets/scholarship.svg"

export default function Loans(props) {
  const { users, downloads, likes,    } = props;

  return (
    <div>
      <div>
        <div className="text-2xl mb-14 text-white">
          <h1> Loans</h1>
        </div>

        <div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center text-2xl font-bold py-10 gap-20 bg-white w-10/12 mx-auto px-5 rounded-2xl">
            <div className="flex items-center space-x-3 md:border-r-2 h-36 pr-5">
            <span><img src={frame} className="w-14 h-14" alt="" /></span>
              <span>{users} Users</span>
            </div>
            <div className="flex items-center space-x-3 md:border-r-2 h-36 pr-5">
            <span><img src={group} alt="" /></span>
              <span>{downloads} Downloads</span>
            </div>
            <div className="flex items-center space-x-3 h-36 pr-5">
            <span><img src={scholarship} alt="" /></span>
              <span>{likes} likes</span>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}
