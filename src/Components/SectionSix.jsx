// SectionSix.js
import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const SectionSix = () => {
  const testimonialsData = [
    {
      firstName: 'Adekunle Kolawole',
      lastName: 'Lagos State',
      content: 'I would prefer a school loan with flexible repayment',
    },
    {
      firstName: 'Bello Ganiyu',
      lastName: 'Ekiti State',
      content: 'This is a great initiative, we students  want such a flexible loan to avoid  being sent off school.',
    },
    {
      firstName: 'Chukwuma Emmanuel',
      lastName: 'Anambra State', 
        content: 'I saw a feature for books,   can Payskul please extend this to   Universities so getting our handouts   can be easier',
    },
    {
      firstName: 'Aisha Ibrahim',
      lastName: 'FCT, Abuja',
      content: 'Wow,  first school focused financial platform, when will the App be launched.',
    },
    {
      firstName: 'Nimat Ajoke',
      lastName: 'Kwara State',
      content: 'If only Payskul had launced last year, my brother would still be in school today, we have the money but was not available when he was sent off school and the bank process was frustrating; Payskul please launch.',
    },
    {
      firstName: 'Precious Ese',
      lastName: 'Lagos State',
      content: 'Ever since my mum saw Payskul Ad,   She has been following their social media   pages to know when they will launch,    she wants to be able to pay our school fees     bit by bit.',
    },
    {
      firstName: 'Bashir Rilwan',
      lastName: 'Niger State',
      content: 'Payskul should please partner with   the Government to give we thestudents    the best.',
    },
  ];

  return (
    <div className='bg-secondaryy py-10 px-20 h-[600px]'>
      <h1 className='font-bold text-white text-3xl py-10 '>Testimonials</h1>
      <div className='w-full flex justify-center'>
        <div className='max-w-xl md:max-w-3xl lg:max-w-5xl w-full '>
          <TestimonialSlider testimonialsData={testimonialsData} />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
