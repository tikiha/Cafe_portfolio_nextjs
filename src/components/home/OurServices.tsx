"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ParallaxText from "../ui/ParallaxText";
import Link from "next/link";
import Layout from "../Layout";
import { useInView } from "framer-motion";

const CustomServiceLink = ({
  index,
  title,
  description,
  href,
  className = "",
}) => {
  return (
    <Link
      className={`border-b py-10 grid grid-cols-12 w-full  ${className}`}
      href={`/${href}`}
    >
      <div className="col-start-3 col-span-3">
        <span className="font-mont">/{index}</span>
        <span className="ml-2 font-mont first-letter:uppercase">{href}</span>
        <div className="w-full aspect-square relative overflow-hidden">
          <Image
            src={`/coffeePics/${href}.jpg`}
            alt={`${href} Picture`}
            fill
            sizes="100vh"
            className="object-cover object-center mt-4"
          />
        </div>
      </div>
      <div className="pl-20 col-span-6 h-full justify-center flex flex-col">
        <h2 className="text-h4">{title}</h2>
        <span className="mt-4 text-body/loose ">{description}</span>
      </div>
    </Link>
  );
};

const OurServices = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px", once: true });
  return (
    <section className={`${className}`}>
      {isInView ? (
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-span-11 flex items-center">
            <span className="text-red-500 font-bold text-xl focus-in-size">
              ・
            </span>
            <span className="text-sm fade-in-up">事業内容</span>
          </div>
          <h1 className="flex items-center col-start-2 col-span-4 text-h2 font-mont focus-in-expand">
            Our Services
          </h1>
          <span className="flex items-center col-span-7 text-body">
            掲載の商品以外にも取り扱いがあります
            <br />
            珈琲のことなら何でもご相談ください。
          </span>
        </div>
      ) : (
        <div ref={ref} className="w-full h-20" />
      )}

      <div className="container !mr-0 lg:!p-0 w-full aspect-[3/1] relative z-10 overflow-hidden rounded-tl-[100px]">
        <Image
          src={"/coffeePics/ourservice.jpg"}
          alt={"Our Service"}
          fill
          className="object-center object-cover"
        />
        <ParallaxText
          baseVelocity={-1}
          className={
            "absolute top-1/2 -translate-y-1/2 text-light text-h2 font-mont"
          }
        >
          Hojo coffee All for a great cup of coffee
        </ParallaxText>
      </div>
      <div className="container !ml-0 lg:!p-0 -translate-y-[15%] bg-secondary overflow-hidden rounded-br-[15%]">
        <div className="pt-[15%] w-full">
          <CustomServiceLink
            index={"01"}
            title={"商品一覧"}
            description={
              "業務用・家庭用のコーヒー豆・粉,リキッドコーヒーなど幅広く商品展開しています."
            }
            href={"products"}
          />
          <CustomServiceLink
            index={"02"}
            title={"飲食店のお客様へ"}
            description={
              "飲食店やホテル,喫茶店のオーナー様へ.プロユースの様々なご要望にお答えするため,業務用商品を多数ご用意しています."
            }
            href={"for-restaurant"}
          />
          <CustomServiceLink
            index={"03"}
            title={"小売流通関係のお客様へ"}
            description={
              "スーパーや小売店の販売者様へ。自社焙煎工場を保有しているため、安定した豆の供給が可能です。安心で美味しいご家庭用コーヒーの卸売を行っております。"
            }
            href={"for-retail"}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
