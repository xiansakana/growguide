import { Navbar } from "../components/homepage/Navbar";
import { Footer } from "../components/shared/Footer";
// import ProductCarousel from "../components/ProductCarousel";
import ScrollToTopButton from "../components/homepage/ScrollToTopButton";
import Hero from "../components/homepage/Hero";
import AboutUs from "../components/homepage/AboutUs";
import Intro from "../components/homepage/Intro";
import Subscribe from "../components/homepage/Subscribe";
import Shop from "../components/homepage/Shop";
import MVPFeatures from "../components/homepage/MVPFeatures";
import Pricing from "../components/homepage/Pricing";
import Testimonials from "../components/homepage/Testimonials";
import Download from "../components/homepage/Download";
import Guarantee from "../components/homepage/Guarantee";
import LazyLoadFadeIn from "../components/shared/LazyLoadFadeIn";

const Home = () => {
  const componentsToLazyLoad = [
    { component: Hero, key: "hero" },
    { component: AboutUs, key: "aboutUs" },
    { component: Intro, key: "intro" },
    { component: Subscribe, key: "subscribe" },
    { component: Shop, key: "shop" },
    { component: MVPFeatures, key: "mvpFeatures" },
    { component: Pricing, key: "pricing" },
    { component: Testimonials, key: "testimonials" },
    { component: Download, key: "download" },
    { component: Guarantee, key: "guarantee" },
    { component: Footer, key: "footer" },
  ];
  return (
    <div>
      <ScrollToTopButton />
      <LazyLoadFadeIn>
        <Navbar />
      </LazyLoadFadeIn>
      <div className="pt-16 flex flex-col w-full">
        {componentsToLazyLoad.map(({ component: Component, key }) => (
          <LazyLoadFadeIn key={key}>
            <Component />
          </LazyLoadFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Home;
