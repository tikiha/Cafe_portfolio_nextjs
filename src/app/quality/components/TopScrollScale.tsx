"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TopScrollScale = ({ className }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rounded = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const width = useTransform(scrollYProgress, [0, 0.5], ["100%", "120%"]);
  const height = useTransform(scrollYProgress, [0, 0.5], ["50vh", "100vh"]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const blur = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    ["blur(10px)", "blur(0px)"]
  );
  return (
    <section
      ref={ref}
      className={`container ml-0 pl-0 h-[350vh] relative w-[calc(100vw-12px)] ${className}`}
    >
      <motion.div
        className="bg-[url(/coffeePics/brown.jpg)] sticky top-0 translate-y-[calc(50vh-50%)] bg-no-repeat bg-cover bg-center"
        style={{
          borderTopRightRadius: rounded,
          height: height,
          width: width,
        }}
      >
        <motion.div
          className="bg-Dark/20 w-full h-full"
          style={{ opacity: opacity }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 w-1/3 text-Light"
          style={{ opacity: opacity, filter: blur }}
        >
          <h2 className="text-h3 font-bold">
            すべては美味しい
            <br />
            珈琲のために｡
          </h2>
          <p className="mt-4">それが北條珈琲の原点です｡</p>
          <p className="mt-4">
            コーヒーの嗜好は時代とともに変化しています。
            お客様のより細かなニーズに素早く対応していくため、
            昭和25年の創業以来培った経験とノウハウを駆使して、
            “珈琲事業”に関するあらゆる可能性に挑戦しています。
            以下、私たちの4つのこだわりをご紹介します。
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TopScrollScale;
