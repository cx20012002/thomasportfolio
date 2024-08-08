import React from "react";

const Intro = () => {
  return (
    <div className="relative flex h-[800px] flex-col items-center justify-end md:h-[700px] xl:h-screen dark:bg-[#0f0f0f] bg-white">
      <p className="absolute flex h-full items-center p-10 font-inter text-[45px] leading-[1.1em] md:text-[55px] xl:right-0 xl:w-[66%] xl:p-0 xl:text-[92px]">
        Cultivating digital brilliance through creative designs and developing
        immersive interactive experiences that elevate brands in the era of
        digital design.
      </p>
      <div className="sticky bottom-0 left-0 h-[200px] w-full dark:bg-gradient-to-b dark:from-transparent dark:to-[#0f0f0f] " />
    </div>
  );
};

export default Intro;
