"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./swiper.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className={`h-full w-full ${className}`}>
      {Pics.length > 1 ? (
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full"
        >
          {Pics.map((pic, index) => (
            <SwiperSlide
              key={`image ${index}`}
              className="relative h-full w-full overflow-hidden"
            >
              <Image
                src={pic}
                alt="coffee pic"
                fill
                // sizes="100vw"
                className="object-center object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center">画像データが見つかりません</div>
      )}
    </div>
  );
};

export default PinterestSwiper;
