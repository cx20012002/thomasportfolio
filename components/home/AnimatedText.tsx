"use client";

import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const AnimatedText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-500, 300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [900, -600]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-start overflow-hidden leading-tight h-4/5 dark:bg-[#0f0f0f] bg-white"
    >
      <motion.h4 className="font-inter text-[18vw] font-medium" style={{ x }}>
        Crafting
      </motion.h4>
      <motion.h4
        className="text-nowrap font-inter text-[18vw] font-medium"
        style={{ x: x2 }}
      >
        Digital Beauty
      </motion.h4>
    </div>
  );
};

export default AnimatedText;
