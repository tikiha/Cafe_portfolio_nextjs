"use client";
import React from "react";
import Image from "next/image";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./swiper.scss";

const images = [
  "/coffeePics/beans.jpg",
  "/coffeePics/brown.jpg",
  "/coffeePics/colorful.jpg",
  "/coffeePics/contact.jpg",
];

function ChapterSwiper({ className = "" }) {
  return (
    <div className={`w-full h-fit text-Light ${className}`}>
      <Swiper
        className="w-full h-fit"
        slidesPerView={2}
        spaceBetween={30}
        speed={1000}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        allowTouchMove={true}
        centeredSlides={true}
        modules={[Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`image ${index}`}
            className={`relative w-full aspect-video overflow-hidden ${
              index === 0 && "rounded-tl-[50px]"
            } ${index === images.length - 1 && "rounded-tr-[50px]"}`}
          >
            <Image
              src={image}
              alt={"image"}
              fill
              priority
              sizes="100vh"
              className="object-cover object-center brightness-[0.8]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler">
        <ChevronLeft
          size={50}
          className="absolute top-1/2 left-10 z-20
            button-prev cursor-pointer stroke-slate-300 hover:animate-bounceLeft max-md:w-10 max-md:left-3"
        />
        <ChevronRight
          size={50}
          className="absolute top-1/2 right-10 z-20
            button-next cursor-pointer stroke-slate-300 hover:animate-bounceRight max-md:w-10 max-md:right-3"
        />
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal absolute z-20"></div>
      </div>
    </div>
  );
}

export default ChapterSwiper;
