"use client";

import { motion, useInView, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import AnimatedText from "@/components/home/AnimatedText";
import HeadSection from "@/components/home/HeadSection";
import ProjectCard from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  return (
    <div className="h-screen">
      {/* Heading */}
      <HeadSection />
      {/* Intro */}
      <div className="relative flex h-screen flex-col items-center justify-end">
        <p className="absolute right-0 flex h-full w-[66%] items-center font-inter text-[92px] leading-[1.1em]">
          Cultivating digital brilliance through creative designs and developing
          immersive interactive experiences that elevate brands in the era of
          digital design.
        </p>
        <div className="sticky bottom-0 left-0 h-[200px] w-full dark:bg-gradient-to-b dark:from-transparent dark:to-black "></div>
      </div>
      {/* Animate Mid Text */}
      <AnimatedText />
      {/* Work */}
      <div className="flex h-fit flex-col justify-center font-poppins">
        <p className="sticky top-0 flex h-[95vh] items-center justify-center text-[25vw] text-neutral-700">
          WORK
        </p>
        <motion.div
          ref={ref}
          className="relative flex h-fit w-full flex-col items-center justify-center gap-y-20 pt-10"
        >
          {/* Projects */}
          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                range={[i * 0.25, 1]}
                progress={scrollYProgress}
                imgSrc={`/${project.src}`}
                backgroundSrc={`/${project.bgSrc}`}
                {...project}
                color={project.color}
              />
            );
          })}

          <div className="z-10 h-[200px] bg-purple-400">All Projects</div>
        </motion.div>
      </div>
      
    </div>
  );
}
