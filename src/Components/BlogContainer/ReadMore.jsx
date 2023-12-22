import React from 'react';

const ReadMore = (props) => {
  const { coverImage, title, content } = props;

  return (
    <div className="relative max-w-md mx-auto h-[30vh] shadow-md">
      <img
        className="w-full h-full object-cover"
        src={coverImage}
        alt="Blog Cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-white mb-4">{content}</p>
          <button className="bg-black text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
