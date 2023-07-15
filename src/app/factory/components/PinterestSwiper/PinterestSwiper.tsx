"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, FreeMode } from "swiper/modules";
import "./swiper.scss";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const images = [
  "/coffeePics/beans.jpg",
  "/coffeePics/brown.jpg",
  "/coffeePics/colorful.jpg",
  "/coffeePics/contact.jpg",
];

const PinterestSwiper = ({ className = "" }) => {
  let Pics;
  if (images.length < 3) {
    Pics = [...images, ...images, ...images, ...images, ...images];
  } else if (images.length < 5) {
    Pics = [...images, ...images, ...images];
  } else if (images.length < 9) {
    Pics = [...images, ...images];
  } else {
    Pics = [...images];
  }
  return (
    <section className={`h-[70lvh] w-full ${className}`}>
      {Pics.length > 1 ? (
        <Swiper
          className="w-full h-full relative"
          spaceBetween={10}
          slidesPerView={4}
          freeMode={{ enabled: true, momentum: false }}
          // breakpoints={{
          //   1024: {
          //     slidesPerView: 4,
          //   },
          //   768: {
          //     slidesPerView: 3.2,
          //   },
          // }}
          // centeredSlides={true}
          speed={14000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Autoplay, FreeMode]}
        >
          {Pics.map((pic, index) => (
            <SwiperSlide
              key={`image ${index}`}
              className="relative h-full w-[20%] overflow-hidden"
            >
              <Image
                src={pic}
                alt="coffee pic"
                fill
                sizes="100vh"
                className="object-center object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full text-center">画像データが見つかりません</div>
      )}
    </section>
  );
};

export default PinterestSwiper;
