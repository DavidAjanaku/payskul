import React from 'react';

export default function MainBlog(props) {
  const {
    coverImage,
    title,
    authorName,
    authorImage,
    publishDate,
  } = props;

  return (
    <div className="relative max-w-md mx-auto  overflow-hidden shadow-md">
      <img
        className="w-full h-[70vh]  object-cover"
        src={coverImage}
        alt="Blog Cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-8">
        <h2 className="text-4xl font-bold mb-2 text-white">
          {title}
        </h2>
        <div className="flex items- mb-4">
          <img
            className="w-28 h-28 rounded-full mr-2"
            src={authorImage}
            alt="Author"
          />
          <div className='text-left'>
            <p className="text-sm text-white">{authorName}</p>
            <div className="">
              <p className="text-sm text-white">Published on: {publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
