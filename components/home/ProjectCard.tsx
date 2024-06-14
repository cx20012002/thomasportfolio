import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";

const ProjectCard = ({
  i,
  title,
  description,
  progress,
  range,
  imgSrc,
  color,
  backgroundSrc,
}: any) => {
  const container = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 } as any);
  const boxRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const good = useMotionValue("80%");

  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start 50%", "start start"],
  });

  const scale = useTransform(progress, range, ["98%", "80%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.87, 1]);

  return (
    <>
      <motion.div
        ref={boxRef}
        className="sticky flex h-screen w-[90vw] cursor-auto justify-center bg-yellow-100 text-black hover:cursor-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          width: scale,
          top: `calc(${(i + 1) * 4}%)`,
          backgroundColor: color,
        }}
      >
        {/* Title - Project */}
        <div className="space-y-5 text-center font-poppins text-white">
          <h2 className="mt-10 text-6xl font-bold tracking-widest">{title}</h2>
          <p className="tracking-wider">{description}</p>
        </div>

        {/* Images */}
        <motion.div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          className="absolute top-[50%] flex h-[70%] w-[40%] -translate-y-[50%] items-center justify-center"
        >
          <motion.div
            style={{
              scale: imageScale,
              backgroundImage: `url(${backgroundSrc})`,
            }}
            className={`h-full w-full bg-[size:100%] bg-[position:center] bg-no-repeat`}
            whileHover={{ backgroundSize: "110%" }}
          />
          <div
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            className="absolute aspect-[3/2] w-[70%]"
          >
            <Image src={imgSrc} alt="" fill sizes="lg" />
          </div>
        </motion.div>

        {/* <motion.div
          className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          initial={{ width: 800, height: 500 }}
          style={{ width: imageScale }}
        /> */}
      </motion.div>

      {isHovered && (
        <motion.div
          className={`pointer-events-none fixed left-0 top-0 -m-[5px] h-[20px] w-[20px] rounded-full bg-neutral-50`}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          animate={{ scale: isHovered2 ? 3 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isHovered3 && <div>fuck</div>}
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;

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
  };
}
