import React from "react";
import Faq from "./Faq/Faq";

export default function () {
  return (
    <div className="bg-secondaryy ">
        <div className="content3 md:w-[60%] mx-auto py-12 md:px-7">
    <h1 className="text-3xl font-bold mb-6 text-white">FAQs</h1>

<div className="grid md:grid-cols-2 justify-center gap-5 mx-auto">
  <Faq
    question="What is Payskul?"
    answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />

  <Faq
    question="What makes Payskul different 
    from other loan apps?"
    answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  />
   <Faq
    question="What do I need to signup for 
    Payskul?"
    answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  />
   <Faq
    question="How can I get my bank statement?"
    answer=""
  />
    <Faq
    question="Unable to sign in, BVN registered 
    to another user?"
    answer=""
  />
    <Faq
    question="What is my maximum account limit?"
    answer=""
  />
   <Faq
    question="How will you add money to my 
    Payskul account?`"
    answer=""
  />
   <Faq
    question="What should I do if I need more help?"
    answer=""
  />
</div>
    </div>
    </div>
  );
}
