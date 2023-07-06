"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoPic from "@/Pics/next.svg";
import HamburgerButton from "./HamburgerButton";
import StableMenu from "./StableMenu";
import HamburgerMenu from "./HamburgerMenu";
import { useMotionValueEvent, useScroll } from "framer-motion";

const NavBar = () => {
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const MenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isStableOpen, setIsStableOpen] = useState(true);
  const [scroll, setScroll] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest - scroll < 0) {
      setIsStableOpen(true);
    } else {
      setIsStableOpen(false);
    }
    return setScroll(latest);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // ハンバーガメニュー外で閉じる
  const handleClickOutside = (e) => {
    if (
      MenuRef.current?.contains(e.target) ||
      ButtonRef.current?.contains(e.target)
    ) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed z-50 w-full h-16 flex items-center justify-between px-10 bg-light
    max-md:h-12 max-md:px-6 delay-300 duration-500 ease-in top-0  ${
      isStableOpen ? "opacity-100" : "opacity-0 -translate-y-full"
    } `}
    >
      <Link href={"/"} className="h-full">
        <Image
          src={LogoPic}
          alt={"next image"}
          className="h-full w-auto py-2"
        />
      </Link>
      <StableMenu />
      <HamburgerButton
        ButtonRef={ButtonRef}
        handleClick={handleClick}
        isOpen={isOpen}
        className="md:hidden"
      />
      {isOpen && (
        <HamburgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          MenuRef={MenuRef}
        />
      )}
    </header>
  );
};

export default NavBar;
