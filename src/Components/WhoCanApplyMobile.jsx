import React, { useState, useEffect } from 'react';
import WhoCanApply from './WhoCanApply';

export default function WhoCanApplyMobile() {
    const items = [
        {
            title: "Parents",
            description: "Parents can now keep their children in school while planning other financial responsibilities with Payskul.",
        },
        {
            title: "Students",
            description: "Students can also worry less about meeting payments for books, handouts, among other school requirements.",
        },
        {
            title: "Schools",
            description: "Schools can now bid farewell to delays in school fees and generate more revenue with Payskul.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValue, setTransformValue] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setTransformValue(-(currentIndex + 1) * 100);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        setTransformValue(-(currentIndex - 1) * 100);
    };

    useEffect(() => {
        // Automatically slide to the next item every 3 seconds
        const intervalId = setInterval(() => {
            handleNext();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]); // Run the effect when currentIndex changes

    return (
        <div className="md:flex grid w-3/4 mx-auto h-[700px] justify-center md:hidden gap-5 mt-20 overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${transformValue}%)` }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full"
                        style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                    >
                        <WhoCanApply title={item.title} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}
