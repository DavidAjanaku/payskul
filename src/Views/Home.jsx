import React from "react";
import Header from "../Components/Navigation/Header";
import Iphone from "../assets/iPhone 11 Pro Mockup label.png";
import IphoneCase from "../assets/main.png";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import Section3 from "../Components/Section3";
import SectionFour from "../Components/SectionFour";
import SectionFive from "../Components/SectionFive";
import SectionSix from "../Components/SectionSix";
import Footer from "../Components/Footer";
import HamburgerMenu from "../Components/HamburgerMenu";
import Blog from "../Components/BlogContainer/Blog";
import backgroundImage from "../assets/Shapes.png";
import WhoCanApply from "../Components/WhoCanApply";
import Ratings from "../Components/Ratings/Ratings";
import Loans from "../Components/Loans";
import SectionSeven from "../Components/SectionSeven";
import SectionEight from "../Components/SectionEight";
import IntroVideo from "../Components/IntroVideo";
import HeroSlider from "../Components/HeroSlider";
import WhoCanApplySection from "../Components/WhoCanApplySection";
import WhoCanApplyMobile from "../Components/WhoCanApplyMobile";

const Home = () => {
  return (
    <div className="min-h-screen w-fit flex flex-col">
      <Header />
      <HamburgerMenu />

      <div className="flex-grow flex  items-center justify-center relative">
        <div className="text-center z-10">
          <div
            className="hero-section px-7 pt-30 md:pt-48 "
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
           <div className="flex flex-wrap md:text-start">
          <div className="md:w-2/3 md:ml-10 xl:ml-24">
          <h1 className=" text-5xl md:text-7xl  font-bold">
          A one-step solution for all your school funding requirements
            </h1>
            <p className="md:w-2/3  font-medium text-base md:text-base mt-10">
              PAYSKUL would like to extend a warm greeting to you. You don’t
              have to stop schooling; you could take a loan to fund your
              academics. The great thing about PAYSKUL is that it is easily
              accessible to both students and parents.
            </p>
            <button className="bg-secondaryy hidden md:block text-white rounded-xl shadow-2xl px-16 flex  mt-20 items-center h-16 text-lg font-bold">
              Click To Sign Up
            </button>
          </div>

            <div className="md:h-[600px] h-[700px] flex md:w-[300px] mx-auto  w-full">
              <HeroSlider/>
              
            </div>
           </div>
           <button className="bg-secondaryy md:hidden mx-auto text-white rounded-xl shadow-2xl px-16 flex  mt-20 items-center h-16 text-lg font-bold">
              Click To Sign Up
            </button>
          </div>
     <WhoCanApplySection/>
     <WhoCanApplyMobile/>

          <section className="bg-secondaryy py-20 my-10">
            <Ratings
              users={172}
              downloads={205}
              likes={69}
              rating={5.0}
              reviews={163}
            />
          </section>

          <SectionOne />
          <SectionTwo />
          <Section3 />
          {/* <SectionFour /> */}
          <section className="bg-secondaryy py-20 my-10">
            <Loans
              users={"Low Interest fee"}
              downloads={"Free coupons for Referrals"}
              likes={"1 scholarship anually"}
            />

            <div className="mt-10">
              <button className="bg-primaryy py-4 px-14 rounded-md font-bold text-2xl text-white shadow-md">
                Click to sign up
              </button>
            </div>
          </section>
          <SectionFive />
          <SectionSix />
          <IntroVideo />
          <SectionSeven />
          <SectionEight />
          {/* <Blog /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
