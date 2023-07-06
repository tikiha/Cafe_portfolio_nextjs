import React from "react";
import Layout from "../Layout";
import Link from "next/link";

const CustomMapLink = ({ title, href, className = "" }) => {
  return (
    <Link
      href={href}
      className={`mt-4 hover:underline underline-offset-4 decoration-1 ${className}`}
    >
      {title}
    </Link>
  );
};

const SiteMap = ({ className = "" }) => {
  return (
    <section className={`bg-primary w-full h-fit ${className}`}>
      <Layout className="h-full py-20 text-Light">
        <div className="col-start-5 col-span-2 flex flex-col items-start">
          <h3 className="text-h4 mb-8 font-mont">About</h3>
          <CustomMapLink title={"珈琲作りのこだわり"} href={"/quality"} />
          <CustomMapLink title={"自社焙煎工場について"} href={"/factory"} />
        </div>
        <div className=" col-span-2 flex flex-col items-start">
          <h3 className="text-h4 mb-8 font-mont">Customer</h3>
          <span className="mt-4">法人のお客様</span>
          <CustomMapLink title={"飲食店のお客様へ"} href={"/for-restaurant"} />
          <CustomMapLink
            title={"小売流通関係のお客様へ"}
            href={"/for-retail"}
          />
        </div>
        <div className=" col-span-2 flex flex-col items-start">
          <h3 className="text-h4 mb-8 font-mont">Products</h3>
          <CustomMapLink title={"商品一覧"} href={"/products"} />
        </div>
        <div className=" col-span-2 flex flex-col items-start">
          <h3 className="text-h4 mb-8 font-mont">Company</h3>
          <CustomMapLink title={"会社概要"} href={"/corporate"} />
          <CustomMapLink title={"直営店舗"} href={"/shop"} />
          <CustomMapLink title={"拠点"} href={"/office"} />
        </div>
        <div className="col-span-4 flex flex-col justify-end items-start space-y-10">
          <Link href={"/"} className="text-h3">
            北條珈琲株式会社
          </Link>
          <span>&copy;2023 HOJO Coffee Co.Ltd</span>
        </div>
        <div className="col-span-8 flex justify-end items-end">
          <CustomMapLink
            title={"新着情報"}
            href={"/news"}
            className="mr-4 relative after:absolute after:-right-4 after:content-[''] after:h-full after:border after:pointer-events-none"
          />

          <CustomMapLink
            title={"よくあるご質問"}
            href={"/faq"}
            className="mx-4 relative after:absolute after:-right-4 after:content-[''] after:h-full after:border after:pointer-events-none"
          />
          <CustomMapLink
            title={"お問い合わせ"}
            href={"/contact"}
            className="mx-4 relative after:absolute after:-right-4 after:content-[''] after:h-full after:border after:pointer-events-none"
          />
          <CustomMapLink
            title={"プライバシーポリシー"}
            href={"/privacy-policy"}
            className="ml-4"
          />
        </div>
      </Layout>
    </section>
  );
};

export default SiteMap;
