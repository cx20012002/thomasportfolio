"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import FooterArrow from "@/public/footer_arrow.svg";

const CaseStudy = () => {
  const ref = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const footer_holder = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0,
  );

  const x = useTransform(scrollYProgress, [0, 1], [-220, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const y = useTransform(scrollYProgress, [0, 1], [100, windowHeight * -0.02]);
  const y2 = useTransform(scrollYProgress, [0, 1], [130, windowHeight * -0.04]);

  const footerMenu1 = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Works", link: "#" },
    { title: "Contact", link: "#" },
  ];

  const footerMenu2 = [
    { title: "Balance", link: "#" },
    { title: "LinkedIn", link: "#" },
    { title: "Dribbble", link: "#" },
    { title: "Twitter", link: "#" },
  ];

  const renderSlide = (color: string, count: number) =>
    Array(count)
      .fill(0)
      .map((_, i) => (
        <div
          key={`slide_${i}`}
          className={`h-[200px] w-full xl:h-[300px]`}
          style={{ background: `${color}` }}
        ></div>
      ));

  // Update super div height based on footer height
  const updateSuperHeight = () => {
    if (footerRef.current && footer_holder.current) {
      footer_holder.current.style.height = `${footerRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      updateSuperHeight();
    };

    window.addEventListener("resize", handleResize);

    // Initial update
    updateSuperHeight();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return (
    <>
      {/* Projects slides */}
      <motion.div
        ref={ref}
        className="relative z-10 flex w-full flex-col bg-white dark:bg-[#0f0f0f]"
      >
        <div className="flex flex-col gap-y-5 overflow-x-hidden pb-20 shadow-custom">
          <motion.div style={{ x }} className="flex w-[200%] gap-5 xl:w-[110%]">
            {renderSlide("green", 5)}
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="flex w-[200%] gap-5 xl:w-[110%]"
          >
            {renderSlide("red", 5)}
          </motion.div>
        </div>
      </motion.div>

      <div ref={footer_holder} className="super"></div>
      {/* Footer */}
      <div
        ref={footerRef}
        className="fixed bottom-0 left-0 -z-10 w-full overflow-y-hidden bg-[#1b1c1f] px-[20px] pt-20"
      >
        <motion.div className="flex flex-col">
          <motion.div
            className="mb-10 flex w-full flex-col justify-between gap-10 xl:flex-row"
            style={{ y: y2 }}
          >
            {/* Footer Left */}
            <Link
              href={""}
              className="group flex gap-10 text-[50px] leading-tight text-[#d1d1d1]"
            >
              <div className="transition-colors duration-500 group-hover:text-white">
                <h2>Drop a line</h2>
                <h2>if you want to collab.</h2>
              </div>
              <div className="flex flex-col justify-end overflow-hidden">
                <FooterArrow className="mt-5 h-[50px] w-[50px] translate-y-[50px] transition-transform duration-500 group-hover:translate-y-0" />
              </div>
            </Link>
            {/* Footer Right  */}
            <div className="flex gap-[180px] font-inter text-lg">
              {/* USEFUL */}
              <div className="flex w-[210px] flex-col">
                <h3 className="mb-3 uppercase text-neutral-400">useful</h3>
                <ul className="grid grid-cols-2 grid-rows-2 gap-x-[100px] gap-y-2">
                  {footerMenu1.map((item, i) => (
                    <motion.li
                      key={i}
                      className="group h-6 w-fit overflow-hidden text-[#d1d1d1]"
                    >
                      <motion.div className="transition:all duration-700 ease-in-out group-hover:-translate-y-[30px] group-hover:text-[#fff]">
                        <Link href={item.link}>
                          <h3>{item.title}</h3>
                          <h3>{item.title}</h3>
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* SOCIAL */}
              <div className="flex w-[230px] flex-col">
                <h3 className="mb-3 uppercase text-neutral-400">Social</h3>
                <ul className="grid grid-cols-2 grid-rows-2 gap-x-[100px] gap-y-2">
                  {footerMenu2.map((item, i) => (
                    <motion.li
                      key={i}
                      className="group h-6 w-fit overflow-hidden text-[#d1d1d1]"
                    >
                      <motion.div className="transition:all duration-700 ease-in-out group-hover:-translate-y-[30px] group-hover:text-[#fff]">
                        <Link href={item.link}>
                          <h3>{item.title}</h3>
                          <h3>{item.title}</h3>
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div style={{ y }}>
            <div className="flex flex-col gap-6">
              {/* Legal Info */}
              <span className="text-[#9b9b9b] xl:self-end">
                Designed by Ghanendra Sahu
              </span>
              {/* Background text */}
              <motion.div className="h-[1px] w-full bg-red-50" />
            </div>

            <motion.div className="flex h-[20vw] w-full flex-row overflow-hidden text-[#595959] after:absolute after:bottom-[60px] after:right-0 after:text-[8vw] after:content-['©'] ">
              <div className="-mt-[1vw] w-full text-[23vw]">OSCAR</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default CaseStudy;
