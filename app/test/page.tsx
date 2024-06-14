"use client";

import useMeasure from "react-use-measure";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const Page = () => {
  const [ref, { height }] = useMeasure();
  const bbref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bbref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [1, 0], ["90%", "100%"]);

  return (
    <div
      ref={bbref}
      className="flex h-fit w-full flex-col items-center justify-center bg-green-300"
    >
      <div className="flex h-screen w-screen items-center justify-center bg-orange-300">
        <h1 className="text-4xl">Hello My World</h1>
      </div>
      <Box good={x} />
      <div className="z-50 h-[1500px] w-[500px] bg-purple-800"></div>
    </div>
  );
};

export default Page;

const Box = ({ good }: any) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 } as any);
  const boxRef = useRef(null);

  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center gap-y-20 bg-purple-200 pt-10">
      <motion.div
        ref={boxRef}
        className="sticky top-20 h-[50vh] w-[90vw] cursor-auto bg-yellow-100 text-black hover:cursor-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{ width: good }}
      >
        <motion.div
          className="absolute left-[50%] top-[50%] h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%] bg-red-200"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        />
      </motion.div>
      <motion.div
        ref={boxRef}
        className="sticky top-20 h-[50vh] w-[90vw] cursor-auto bg-yellow-100 text-black hover:cursor-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{ width: good }}
      >
        <motion.div
          className="absolute left-[50%] top-[50%] h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%] bg-red-200"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        />
      </motion.div>
      <motion.div
        ref={boxRef}
        className="sticky top-20 h-[50vh] w-[90vw] cursor-auto bg-yellow-100 text-black hover:cursor-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{ width: good }}
      >
        <motion.div
          className="absolute left-[50%] top-[50%] h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%] bg-red-200"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        />
      </motion.div>

      {isHovered && (
        <motion.div
          className={`pointer-events-none fixed left-0 top-0 -m-[5px] h-[20px] w-[20px] rounded-full bg-red-600`}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          animate={{ scale: isHovered2 ? 3 : 1 }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      )}
    </div>
  );
};

function getRelativeCoordinates(event: any, referenceElement: any) {
  const position = {
    xx: event.clientX,
    yy: event.clientY,
    x: event.pageX,
    y: event.pageY,
  };

  const boxRect = referenceElement.getBoundingClientRect();

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.offsetWidth,
    height: referenceElement.offsetHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.xx,
    y: position.yy,
    // width: offset.width,
    // height: offset.height,
    // centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    // centerY:
    //   (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}
