'use client'

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const WorkSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="flex h-fit flex-col items-center justify-center py-32 font-poppins">
      
      {/* Title */}
      <p className="sticky top-0 flex h-[95vh] items-center justify-center text-[25vw] text-neutral-700">
        WORK
      </p>
      
      <motion.div
        ref={ref}
        className="relative flex h-fit w-full flex-col items-center justify-center gap-y-20 py-20"
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
      </motion.div>
      
      {/* Button */}
      <div className="group relative cursor-pointer overflow-hidden rounded-full border border-current px-8 py-5 font-inter text-lg">
        <div className="transition-colors duration-300 group-hover:text-secondary">
          All Projects
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full translate-y-full rounded-full bg-current transition-transform duration-300 group-hover:translate-y-0" />
      </div>
    </div>
  );
};

export default WorkSection;
