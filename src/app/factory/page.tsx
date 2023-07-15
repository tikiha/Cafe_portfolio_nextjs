import Title from "@/components/Title";
import React from "react";
import PinterestSwiper from "./components/PinterestSwiper/PinterestSwiper";
import Manufacturing from "./components/Manufacturing/Manufacturing";

const Page = () => {
  return (
    <main>
      <section>
        <Title
          title={"自社焙煎工場について"}
          subtitle={"ABOUT OUR FACTORY"}
          className={undefined}
        />
        <div className="h-screen w-full flex items-center">
          <div
            className="bg-[url(/coffeePics/factory.jpg)] bg-cover bg-center bg-no-repeat
          h-[70lvh] rounded-tr-[50px] w-[90%] opacity-0 animate-[fade-in-up_1.5s_1.5s_ease_forwards]"
          />
        </div>
      </section>
      <section className="container">
        <h2 className="text-center text-h3">
          「安心」「安全」「おいしい」が 生まれる場所。
        </h2>
        <p className="mt-10">
          大量の生豆を保管できる「生豆サイロ」や、プロバット社製の大型熱風焙煎機を2基、「小型焙煎機」「炭焼焙煎機」等を保有しています。
          最高の焙煎技術で煎り上げたコーヒー豆を一貫した管理システムのもとお届けしています。
          「安心」「安全」「おいしい」を目指し、国際規格のFSSC認証、有機JAS認証を取得しております。
        </p>
      </section>
      <PinterestSwiper className="mt-10" />
      <Manufacturing className="mt-10" />
    </main>
  );
};

export default Page;
