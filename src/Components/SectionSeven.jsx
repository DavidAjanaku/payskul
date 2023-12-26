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
            answer="Payskul is designed to help parents and students plan their 
academic journey, request for low interest school fees, 
identify the right schools to attend and also have an insurance
cover for their future schools."
  />

  <Faq
    question="What makes Payskul different 
    from other loan apps?"
            answer="We provide a better ecosystem of services, including 
outstanding customer support, the best pricing on 
banking transactions, the highest savings interest rates, 
and attractive credit rates."
  />
   <Faq
    question="What do I need to signup for 
    Payskul?"
            answer="To open a Payskul account, you must be at least 18 years old, 
have a valid mobile number, a functioning email address, 
a valid ID, and BVN."
  />
   <Faq
    question="How can I get my bank statement?"
            answer="To access your Payskul statement, follow these steps:
• Log in to your Payskul account 
• On the home page, select Transactions‍
• At the top right of your transaction page, select "The calendar Icon
           Input the start date and end date then click Proceed
 Your statement of account will be displayed to you on the app
  />
    <Faq
    question="Unable to sign in, BVN registered 
    to another user?"
            answer="This indicates that you have previously registered a Payskul account 
from our app or from the web application. Kindly sign in (not register) 
in the app and ensure that all the details provided now are the same 
as those provided previously. Information such as your date of birth 
and phone number must be the same to access your account. 
If the problem persists, kindly send a screenshot of the details entered 
(phone number and date of birth) for verification here."
  />
    <Faq
    question="What is my maximum account limit?"
            answer="Your loan limit is determined by your KYC level. See details 
below:
Level 1: ‍Basic loan request limit - ₦50,000 - ₦250,000 loan limit
Level 2:‍ Morderate transfer limit -  ₦250,000 - ₦500,000 loan limit
Level 3:‍ Exclusive loan limit -  ₦500,000 - ₦1000,000 loan limit"
  />
   <Faq
    question="How will you add money to my 
    Payskul account?`"
            answer="You can fund your Payskul account via the app for transactions by:
1) Go to the Carbon app home page, click ‘Fund Account’.
2) Enter the amount you want to fund your Payskul account with.
3) Select USSD or add money with a DEBIT CARD for the top-up. 
If you are yet to set up a card on Payskul, you will be asked to do so 
at this point.
4) Once top-up is successfully completed, the funds will reflect in your
 Payskul account.

Also, you can fund your Carbon account directly via bank transfer
 using your bank's mobile app or USSD to your Carbon account.
Bank Name; Carbon or One FinanceAccount Number; Your Payskul 
unique ID number"
  />
          <Faq
            question="What should I do if I need more help?"
            answer={
              "Please contact us by raising a support ticket from the app by " +
              "clicking the ? icon on the homepage of your mobile app or you " +
              "can reach out to us via the support option on the app by following " +
              "these steps• Select 'Account' at the footer on the home page " +
              "Choose Support and select Contact customer support " +
              "You can send a message to us via this link: " +
              "https://payskul.com/contact-form to enable us to assist in " +
              "rectifying the issue."
            }
          />

</div>
    </div>
    </div>
  );
}
