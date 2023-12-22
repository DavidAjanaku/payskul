import React from 'react';

const IntroVideo = () => {
  return (
    <div className=" justify-center items-center h-screen">
        <h1 className='text-lg font-bold py-10'>Introductory Video</h1>
      <div className="md:w-10/12 mx-auto">
        <iframe
          title="Introductory Video"
          width="100%"
          height="700"
          src="https://youtu.be/kuIVvwSWIig?si=u53QPuTlw6yN3n0g"
          allowFullScreen
          
        ></iframe>
      </div>
    </div>
  );
};

export default IntroVideo;
