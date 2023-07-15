import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const OnlineShop = ({ className = "" }) => {
  return (
    <Link href={""} className={`w-full h-full ${className}`}>
      <div className="w-full group aspect-[5/1] min-h-[20vh] relative overflow-hidden">
        <Image
          src={"/coffeePics/onlineshop.jpg"}
          alt={""}
          fill
          sizes="100vh"
          className="object-center object-cover group-hover:scale-105 duration-700 ease-in-out"
        />
        <div className="flex items-center justify-center relative h-full lg:text-8xl text-h1 font-bold font-mont bg-Dark/40 mix-blend-darken text-Light/40 group-hover:bg-Dark/70 duration-700 ease-in-out">
          Online Shop
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-Light font-bold text-3xl flex items-center ">
          <ShoppingCart className="mr-4" />
          <span>オンラインショップ</span>
        </div>
      </div>
    </Link>
  );
};

export default OnlineShop;
