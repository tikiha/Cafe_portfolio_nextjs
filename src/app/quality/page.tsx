"use client";
import React from "react";
import Layout from "../layout";
import TopScrollScale from "./components/TopScrollScale";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <main className="h-full w-full">
      <motion.section
        className="container flex flex-col items-start justify-end w-full h-[40vh]"
        initial={{ y: 100 }}
        whileInView={{ y: 100 }}
      >
        <span className="text-red-500 font-bold text-3xl focus-in-size">
          ・
        </span>
        <span className="mt-4 animate-[fade-in-up_1.5s_ease]">Quality</span>
        <h1 className="text-h2 mt-10 animate-[focus-in-expand_1.5s_ease]">
          珈琲作りのこだわり
        </h1>
      </motion.section>

      <TopScrollScale className="" />
    </main>
  );
};

export default Page;
