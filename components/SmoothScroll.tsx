"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.clientHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef]);

  const { scrollYProgress } = useScroll();
  const smoothProcess = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProcess, "change", (latest) => {
    if (latest === 0) {
      setIsLoading(false);
    }
  });

  const y = useTransform(smoothProcess, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="fixed top-0 flex w-screen flex-col"
        ref={contentRef}
        style={{ y: isLoading ? 0 : y }}
      >
        {children}
      </motion.div>
    </>
  );
}
