import React from "react";
import BlogContainer from "./BlogContainer";

export default function Blog() {
  return (
    <div className="my-10 example">
      <h1 className="font-bold text-2xl my-8">Blog</h1>
      <div className="flex mx-auto w-[100vw]  overflow-scroll space-x-7">
   <div>
   <BlogContainer />
   </div>
    <div>
    <BlogContainer />
    </div>
    <div>
    <BlogContainer />
    </div>
    <div>
    <BlogContainer />
    </div>
      </div>
    </div>
  );
}
