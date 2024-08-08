"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

// Menu list
const menuList = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest <= lastY);
    setLastY(latest);
  });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const variants = {
    nav: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
    menu: {
      open: { height: "100vh", opacity: 1, display: "block" },
      closed: { height: 100, opacity: 0, display: "none" },
    },
    items: {
      open: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 },
      },
      closed: { opacity: 0, x: 100 },
    },
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 flex h-16 items-center px-8 font-light ${isMenuOpen && "text-white"}`}
      animate={isVisible ? "visible" : "hidden"}
      variants={variants.nav}
      initial="hidden"
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="flex w-full justify-between">
        <div>hello!</div>
        <div className="hidden gap-5 md:flex">
          {menuList.slice(1).map((menu) => (
            <Link href={menu.path} key={menu.name}>
              {menu.name}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>
      </div>

      <h4
        className="w-[120px] cursor-pointer text-right md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "• close" : "• menu"}
      </h4>

      <motion.div
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants.menu}
        className="absolute left-0 right-0 top-0 -z-10 bg-black text-white"
      >
        <motion.ul
          className="mt-60 flex flex-col p-12 font-poppins text-6xl font-medium leading-[6rem]"
          variants={variants.items}
        >
          {menuList.map((menu, index) => (
            <motion.li key={index} variants={variants.items}>
              <Link href={menu.path}>{menu.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
        <div
          className="mt-14 flex w-full justify-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <ThemeSwitcher swtichText />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
