"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitch/ThemeSwitcher";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleToggle = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleToggle}
      className={`font-mont ${className} ${
        pathname === href
          ? "text-primary"
          : "hover:text-primary  ease duration-200"
      }`}
    >
      {title}
    </button>
  );
};

const HamburgerMenu = ({ isOpen, setIsOpen, MenuRef }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      ref={MenuRef}
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className="min-w-[70vw] z-20 bg-Light/70 text-Dark dark:bg-Dark/90 dark:text-Light backdrop-blur-md py-32 rounded-lg flex flex-col justify-between items-center fixed top-1/2 left-1/2 max-lg:py-16"
    >
      <nav className="flex text-2xl items-center flex-col justify-center space-y-5 ">
        <CustomMobileLink
          href="/"
          title="Home"
          className=""
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/news"
          title="News"
          className=""
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/works"
          title="Works"
          className=""
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/contact"
          title="Contact"
          className=""
          toggle={handleClick}
        />
        <ul>
          <li className="flex space-x-4">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default HamburgerMenu;
