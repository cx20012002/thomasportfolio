"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

const CaseStudy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-120, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div>
      <motion.div
        ref={ref}
        className="relative flex w-full flex-col gap-y-5 overflow-hidden bg-red-200"
        style={{y:100}}
      >
        <motion.div style={{ x }} className="flex w-[110%] gap-5 bg-blue-300">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={`s_${i}`}
                className="h-[300px] w-full bg-green-300"
              ></div>
            ))}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="flex w-[110%] gap-5 bg-blue-300"
        >
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={`s_${i}`}
                className="h-[300px]  w-full bg-purple-400"
              ></div>
            ))}
        </motion.div>
      </motion.div>

      <div className="h-[800px] w-full bg-slate-600 p-10">This is footer</div>
    </div>
  );
};

export default CaseStudy;
