"use client";
import { motion } from "framer-motion";
import React from "react";

const Title = ({ title, subtitle, className }) => {
  return (
    <motion.section
      className={`container flex flex-col items-start justify-end w-full h-[50lvh] ${className}`}
    >
      <span className="text-red-500 font-bold text-3xl focus-in-size">・</span>
      <span className="mt-4 opacity-0 animate-[fade-in-up_1.5s_0.3s_ease_forwards]">
        {subtitle}
      </span>
      <h1 className="text-h2 mt-10 opacity-0 animate-[focus-in-expand_1.5s_0.6s_ease_forwards]">
        {title}
      </h1>
    </motion.section>
  );
};

export default Title;
