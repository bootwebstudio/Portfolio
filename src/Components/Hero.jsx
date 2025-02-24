import React from "react";
import Navbar from "./Navbar";

const Hero = React.memo(() => {
  return (
    <div
      data-scroll
      data-scroll-container
      className="w-full h-screen p-4 sm:p-4 sm:px-8 xl:p-4 xl:px-16 relative lg:capitalize font-[Nohemi] text-accent bg-main"
    >
      <Navbar />
      <div className="w-full h-full px-16 absolute top-0 left-0 flex flex-col items-center justify-center">
        <h2 className="w-full lg:w-[80%] xl:w-[75%] text-center text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Redefining Brands with{" "}
          <span className="award-winning">Award-Winning</span> Web Excellence
        </h2>
        <p className="w-full lg:w-[80%] xl:w-[60%] p-5 px-0 text-center sm:text-xl">
          At Bootweb Studio, we create stunning, award-winning websites that
          elevate brands. With sleek designs and seamless functionality, we help
          your business stand out and succeed online.
        </p>
      </div>
      <div className="xl:hidden">
        <div className="absolute bottom-4 right-4 sm:bottom-4 sm:right-8 rounded-full text-main bg-accent">
          <a className="p-2 px-4 pr-5 text-lg flex gap-2 items-center" href="https://bootwebstudio.github.io/Portfolio/" target="_blank">
            <i className="ri-phone-fill"></i>
            <span className="">Book a call</span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Hero;
