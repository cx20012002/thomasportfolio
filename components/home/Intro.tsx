import React from "react";

const Intro = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-end">
      <p className="absolute right-0 flex h-full w-[66%] items-center font-inter text-[92px] leading-[1.1em]">
        Cultivating digital brilliance through creative designs and developing
        immersive interactive experiences that elevate brands in the era of
        digital design.
      </p>
      <div className="sticky bottom-0 left-0 h-[200px] w-full dark:bg-gradient-to-b dark:from-transparent dark:to-black " />
    </div>
  );
};

export default Intro;
