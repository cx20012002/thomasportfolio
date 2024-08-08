import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { getRelativeCoordinates } from "@/util/generalFunc";
import { ArrowRight } from "lucide-react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 } as any);
  const boxRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start 50%", "start start"],
  });

  const scale = useTransform(progress, range, ["98%", "80%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.1]);

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
          className="group absolute top-[50%] flex h-[70%] w-[90%] -translate-y-[50%] items-center justify-center lg:h-[70%] lg:w-[50%]"
        >
          <motion.div
            style={{
              scale: imageScale,
              backgroundImage: `url(${backgroundSrc})`,
            }}
            className={`h-full w-full bg-[size:100%] bg-[position:center] bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[size:110%]`}
          />

          {/* Inner Image */}
          <div className="absolute aspect-[3/2] w-[70%]">
            <Image src={imgSrc} alt="" fill sizes="lg" />
          </div>
        </motion.div>
      </motion.div>

      {isHovered && (
        <motion.div
          className={`pointer-events-none fixed left-0 top-0 -m-[5px] flex h-[20px] w-[20px] items-center justify-center rounded-full ${isHovered2 ? "bg-black" : "bg-neutral-500"}`}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          animate={{ scale: isHovered2 ? 3 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isHovered2 && (
            <ArrowRight className="text-nature-500 w-2 rotate-[-45deg]" />
          )}
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
