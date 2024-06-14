"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import React, { cloneElement } from "react";
import { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance, FaDribbble } from "react-icons/fa6";
import useMeasure from "react-use-measure";

const HeadSection = () => {
  const content = [
    "Experiance",
    "Brands",
    "Websites",
    "Applications",
    "Experiance",
  ];

  const icons = [
    { icon: <FaBehance /> },
    { icon: <FaDribbble /> },
    { icon: <FaLinkedinIn /> },
  ];

  const counter = useMotionValue(0);
  const [ref, { height }] = useMeasure();

  useEffect(() => {
    const interval = setInterval(() => {
      const current = counter.get() - height;
      animate(counter, current, { duration: 0.5 }).then(() => {
        if (current < -height * (content.length - 2)) {
          counter.set(0);
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [counter, height, content.length]);

  return (
    <div>
      <div className="sticky top-16 mb-10 flex px-8 dark:mix-blend-difference z-10">
        {/* Animated Title */}
        <div className="w-4/5">
          <div className="flex items-center gap-5">
            <div className="aspect-square h-12 rounded-full opacity-0"></div>
            <p className="text-[130px] font-medium">Designing</p>
          </div>

          <div className="flex items-center gap-5 -mt-5">
            <div className="aspect-square h-12 rounded-full bg-current"></div>
            <div className="h-[200px] overflow-hidden">
              <motion.div style={{ y: counter }}>
                {content.map((item, idx) => (
                  <div key={idx} ref={ref}>
                    <p className="text-[130px] font-medium">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex w-1/5 items-end justify-end">
          <div className="mb-14 flex gap-5">
            {icons.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-current"
              >
                {cloneElement(item.icon, {
                  className:
                    "text-xl transition-colors group-hover:text-secondary",
                })}
                <div className="absolute inset-0 -z-10 h-full w-full translate-y-full rounded-full bg-current transition-transform duration-300 group-hover:translate-y-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Video */}
      <video src="/banner-video.mp4" autoPlay loop muted className="w-full" />
    </div>
  );
};

export default HeadSection;
