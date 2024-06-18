"use client";

import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

// make a menu list
const menuList = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastY(latest);
  });

  return (
    <motion.nav
      className="sticky top-0 flex h-16 items-center justify-between px-8 font-light z-50"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div>hello!</div>
      <div className="flex gap-5">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.name}>
            {menu.name}
          </Link>
        ))}
        <ThemeSwitcher />
      </div>
    </motion.nav>
  );
};

export default Navbar;
