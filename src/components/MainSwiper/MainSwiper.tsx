"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Layout from "../Layout";
import WaveAnimation from "../wave/wave";

const CustomListItem = ({
  title,
  description,
  className = "",
  setIsSelected,
  isSelected,
}) => {
  return (
    <li className={`lg:flex items-center h-10 hidden relative ${className}`}>
      <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
      >
        <circle cx={10} cy={10} r={10} className="fill-light" />

        <circle
          cx={10}
          cy={10}
          r={2}
          className={` ${
            isSelected === title
              ? "fill-red-500 scale-150 origin-center"
              : "fill-dark"
          }`}
        />
      </svg>
      <div className="w-full">
        {isSelected === title ? (
          <motion.div
            className="border border-dark text-xs py-1 px-2"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0)" }}
            exit={{ clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.7 }}
          >
            {description}
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsSelected(title)}
            className="font-mont"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0)" }}
          >
            {title}
          </motion.button>
        )}
      </div>
    </li>
  );
};

const MainSwiper = ({ className = "" }) => {
  const [isSelected, setIsSelected] = useState("Beans");
  return (
    <Layout className={`relative ${className}`}>
      <Carousel isSelected={isSelected} className="col-span-10" />
      <WaveAnimation className="top-1/2" />
      <div className="col-span-2 h-full pt-[30%] px-10">
        <ol className=" h-fit relative">
          <div className="h-[calc(100%-30px)] my-4 border border-dashed border-slate-300 absolute left-[9px] " />

          <CustomListItem
            title="Beans"
            description="生豆の品質を均一にして保管"
            className=""
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
          <CustomListItem
            title="Roasting"
            description="大型ツインロースティングにして焙煎"
            className="my-10"
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
          <CustomListItem
            title="Packaging"
            description="風味を逃さずにパッケージング"
            className="my-10"
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
          <CustomListItem
            title="Sale"
            description="自慢の珈琲豆をご提案"
            className="my-10"
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
          <CustomListItem
            title="YourCup"
            description={"美味しい一杯をお届け"}
            className=""
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
        </ol>
      </div>
    </Layout>
  );
};

export default MainSwiper;
