import React from "react";
import TopScrollScale from "./components/TopScrollScale";
import Chapter from "./components/Chapter";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer/Footer";
import Title from "@/components/Title";

const Page = () => {
  return (
    <main className="h-full w-full">
      <Title
        title={"珈琲作りのこだわり"}
        subtitle={"Quality"}
        className={undefined}
      />
      <TopScrollScale className="" />
      <Chapter
        className=""
        num={"01"}
        title={"珈琲調達へのこだわり"}
        sub1={"Supply"}
        sub2={"Beans"}
        paragraph={
          "コーヒーの品質を常に均一に保つために生産国のコーヒーを同ロットで大量に買い付けます。生産工場には、大型サイロをはじめ、最大5万袋（約3000t）という莫大な量の生豆を保管できる設備を備えています。そのため、「高品質コーヒーの安定共有」ができるのです。"
        }
      />
      <Chapter
        className=""
        num={"02"}
        title={"焙煎へのこだわり"}
        sub1={"Coffee"}
        sub2={"Roasting"}
        paragraph={
          "高品質のコーヒー豆を安定して焙煎できる、大型熱風焙煎機を保有。やわらかな熱風で焙煎することで、すっきりとした後味に仕上がります。焙煎したコーヒーは素早くパッケージングし、深く豊かな味わいや、芳醇な風味も逃さずお届けしています。"
        }
      />
      <Chapter
        className=""
        num={"03"}
        title={"品質管理へのこだわり"}
        sub1={"Quality"}
        sub2={"Control"}
        paragraph={
          "コーヒー生豆の仕入れから商品開発まで一貫した管理体制のもと、安心・安全でおいしいコーヒーづくりに取り組んでいます。天理工場は食品安全マネジメントシステムに関する国際規格のFSSC22000の認証、有機JAS法に基づく有機JAS認証を取得しています。"
        }
      />
      <Chapter
        className=""
        num={"04"}
        title={"商品開発へのこだわり"}
        sub1={"Coffee"}
        sub2={"Roasting"}
        paragraph={
          "時代とともに絶えず変化するコーヒーの嗜好やニーズに応えるため、山本珈琲では、開発部門と各部門が密に連携し、製品化に取り組んでいます。様々な嗜好・ライフスタイルに合った製品を目指し、コンセプトを決定。試作テストを積み重ね、美味しさを徹底的に追及しています。"
        }
      />
      <LinkCard
        href={"/factory"}
        parallax={"In House Factory -"}
        title={"Factory"}
        subtitle={"自社焙煎工場について"}
        className="mt-20"
      />
      <Footer />
    </main>
  );
};

export default Page;
