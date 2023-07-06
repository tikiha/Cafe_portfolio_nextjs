"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Layout";
import { useInView } from "framer-motion";

const StickyContainer = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px", once: true });
  return (
    <Layout className={`relative pr-0 lg:mr-0 ${className}`}>
      {isInView ? (
        <div className="col-start-2 col-span-5 sticky h-fit top-1/4 flex flex-col mt-32">
          <div className="flex items-center">
            <span className="text-red-500 font-bold text-xl focus-in-size">
              ・
            </span>
            <span className="text-sm fade-in-up">私たちの想い</span>
          </div>
          <h1 className="text-h3 my-10 animate-[focus-in-expand_1.5s_ease]">
            すべては美味しい
            <br />
            珈琲のために。
          </h1>
          <div className="fade-in-up">
            <p className="text-body/loose mt-4">
              昭和25年創業、西日本屈指の焙煎工場を有し、
              <br />
              培ってきた焙煎とブレンドの技術を駆使し、
              <br />
              珈琲事業に関するあらゆる可能性を広げます。
            </p>
            <p className="text-body/loose mt-4">
              私たちは人のつながりと、コーヒーの持つ無限の可能性を信じ、
              <br />
              皆様の豊かな生活のために挑戦し続けます。
            </p>
          </div>
        </div>
      ) : (
        <div ref={ref} className="col-span-6" />
      )}
      <div className="col-span-6 aspect-[5/9] relative flex flex-col">
        <Link
          className="relative w-full aspect-square rounded-tl-[20%] overflow-hidden"
          href={"/"}
        >
          <Image
            src={"/coffeePics/quality.jpg"}
            alt={"Quality Picture"}
            fill
            // sizes="100vh"
            className="object-cover object-center h-full"
          />
        </Link>
        <Link
          className="absolute w-full aspect-square rounded-tl-[20%] overflow-hidden top-0 translate-y-[80%]"
          href={"/"}
        >
          <Image
            src={"/coffeePics/roasting.jpg"}
            alt={"Quality Picture"}
            fill
            // sizes="100vh"
            className="object-cover object-center h-full"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default StickyContainer;
