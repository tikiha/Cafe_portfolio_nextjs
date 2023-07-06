import MainSwiper from "@/components/MainSwiper/MainSwiper";
import StickyContainer from "@/components/home/StickyContainer";
import OurServices from "@/components/home/OurServices";
import AboutUs from "@/components/home/AboutUs";
import News from "@/components/home/News";
import Contact from "@/components/home/Contact";
import SiteMap from "@/components/home/SiteMap";
import OnlineShop from "@/components/home/OnlineShop";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex items-end justify-end  mt-52 h-full focus-in-expand">
        <h1 className="text-h2">
          すべては美味しい
          <br />
          珈琲のために。
        </h1>
        <span className="text-sm font-mont -translate-y-1/2 -translate-x-1/3">
          ALL FOR
          <br />A GREAT CUP OF COFFEE
        </span>
      </div>

      <MainSwiper className="mt-20" />
      <StickyContainer className="mt-20" />
      <OurServices className="mt-20" />
      <AboutUs className="mt-20" />
      <News className="mt-20" />
      <Contact className="mt-20" />
      <SiteMap className="" />
      <OnlineShop className="" />
    </main>
  );
}
