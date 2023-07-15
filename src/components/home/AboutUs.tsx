"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import HorizontalScroll from "../ui/HorizontalScroll";
import { useInView } from "framer-motion";

const CustomAboutLink = ({ title, subtitle, href, className }) => {
  return (
    <Link
      href={`/${href}`}
      className={`flex flex-col flex-shrink-0 items-center w-[25vw] fade-in-up ${className}`}
    >
      <div className="relative overflow-hidden rounded-full w-full aspect-square">
        <Image
          src={`/coffeePics/${href}.jpg`}
          alt={`${href}`}
          fill
          className="object-cover object-center hover:scale-105 duration-300 ease-in-out"
        />
      </div>
      <span className="mt-4">{subtitle}</span>
      <h2 className="mt-4 text-h3">{title}</h2>
    </Link>
  );
};

const AboutUs = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <HorizontalScroll className={`${className}`}>
      {isInView ? (
        <>
          <div className="flex-shrink-0 w-[25vw] flex flex-col items-start pl-4 lg:pl-14">
            <div className="flex items-center">
              <span className="text-red-500 font-bold text-xl focus-in-size">
                ・
              </span>
              <span className="text-sm opacity-0 animate-[focus-in-expand_0.6s_0.3s_ease_forwards]">
                会社案内
              </span>
            </div>
            <h1 className="text-h3 my-10 font-mont opacity-0 animate-[focus-in-expand_1.5s_0.6s_ease_forwards]">
              About Us
            </h1>
            <p className="opacity-0 animate-[fade-in-up_1.5s_0.9s_ease_forwards]">
              山本珈琲は、全社員とお客様とが、共にコーヒーが与えてくれる喜びや感動をわかちあえる企業であり続けます。
            </p>
          </div>
          <CustomAboutLink
            title={"会社概要"}
            subtitle={"Overview"}
            href={"overview"}
            className={""}
          />
          <CustomAboutLink
            title={"直営店舗"}
            subtitle={"Shop"}
            href={"shop"}
            className={""}
          />
          <CustomAboutLink
            title={"拠点"}
            subtitle={"Office"}
            href={"office"}
            className={""}
          />
        </>
      ) : (
        <div ref={ref} />
      )}
    </HorizontalScroll>
  );
};

export default AboutUs;
