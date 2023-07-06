import React from "react";
import Layout from "../Layout";
import Link from "next/link";

const CustomNewsLink = ({ date, tag, title, href, className = "" }) => {
  return (
    <Link
      className={`flex flex-col items-start border-b py-10 relative group overflow-hidden line-slide ${className}`}
      href={`/${href}`}
    >
      <div className="flex items-center w-1/5 text-sm">
        <span>{date}</span>
        <span className="border rounded-full px-2 py-1 ml-4">{tag}</span>
      </div>

      <div className="flex items-center">
        <h3 className="text-h4">{title}</h3>
      </div>
    </Link>
  );
};

const News = ({ className = "" }) => {
  return (
    <Layout className={`${className}`}>
      <div className="col-span-12">
        <span className="text-sm flex items-center">
          <span className="text-red-500 font-bold text-xl">・</span>新着情報
        </span>
        <h1 className="text-h3 font-mont">News</h1>
      </div>
      <div className="col-span-4 flex flex-col">
        <Link href={"/news"}>
          <span className="text-red-500 font-bold text-xl">・</span>
          <span>すべて</span>
        </Link>
        <Link href={"/news"}>
          <span className="text-red-500 font-bold text-xl">・</span>
          <span>お知らせ</span>
        </Link>
        <Link href={"/news"}>一覧へ</Link>
      </div>
      <div className="col-span-8 flex flex-col">
        <CustomNewsLink
          date={"2023.06.02"}
          tag={"お知らせ"}
          title={"台風2号に伴う営業時間変更のお知らせ"}
          href={"/"}
        />
        <CustomNewsLink
          date={"2023.05.24"}
          tag={"お知らせ"}
          title={"ホームページをリニューアルしました."}
          href={"/"}
        />
      </div>
    </Layout>
  );
};

export default News;
