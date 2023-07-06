"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitch/ThemeSwitcher";
import { motion } from "framer-motion";
import NavViewPort from "./NavViewPort";

const CustomButton = ({ href, title, className = "", setHovered }) => {
  const pathname = usePathname();
  return (
    <motion.div
      onMouseEnter={() => setHovered(href)}
      // onMouseLeave={() => setHovered(null)}
      className={`cursor-pointer ${className} ${
        pathname === href
          ? "text-primary"
          : "hover:text-primary  ease duration-200"
      }`}
    >
      {title}
    </motion.div>
  );
};

const StableMenu = () => {
  const [hoverd, setHovered] = useState(null);
  return (
    <nav className="h-full flex items-center w-2/3 relative max-md:hidden group-hover:bg-slate-400">
      <NavViewPort hoverd={hoverd} setHovered={setHovered} />

      <div className="z-10 flex items-center justify-between w-full px-20">
        <CustomButton
          href={"quality"}
          title={"珈琲作りのこだわり"}
          className=""
          setHovered={setHovered}
        />
        <CustomButton
          href={"customer"}
          title={"法人のお客様"}
          className=""
          setHovered={setHovered}
        />
        <CustomButton
          href={"products"}
          title={"商品一覧"}
          className=""
          setHovered={setHovered}
        />
        <CustomButton
          href={"corporate"}
          title={"会社案内"}
          className=""
          setHovered={setHovered}
        />
        <CustomButton
          href={"contact"}
          title={"お問い合わせ"}
          className=""
          setHovered={setHovered}
        />
        <ThemeSwitcher className="" />
      </div>
    </nav>
  );
};

export default StableMenu;
