import React, { useState } from 'react';
import plusSign from '../../assets/Plus Sign.svg';
import minusSign from '../../assets/Minus Sign.svg';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg mb-4 max-w-md">
      <div
        className="flex items-center justify-between cursor-pointer px-4 py-10 border-b border-gray-200"
        onClick={toggleAccordion}
      >
        <div className="text-left">
          <span className="font-bold text-lg">{question}</span>
        </div>
        <div className="text-right">
          <img src={isOpen ? minusSign : plusSign} alt="" />
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
