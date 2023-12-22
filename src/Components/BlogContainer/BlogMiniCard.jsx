import React from 'react';

const BlogMiniCard = (props) => {
  const { coverImage, content } = props;

  return (
    <div className="max-w-md h-[20vh] mx-auto relative bg-blue-600 border-white border-2   shadow-md flex items-center space-x-20">
      <img
        className="w-28 h-28 border-blue-600 border-2 absolute -left-10 z-20 rounded-full object-cover"
        src={coverImage}
        alt="Blog Cover"
      />
      <div className="flex-1   justify-center p-4 ">
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
};

export default BlogMiniCard;
