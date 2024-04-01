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

export const Home = () => {
  return (
    <div>
      <ScrollToTopButton />
      <Navbar />
      <div className="pt-16 flex flex-col">
        {/* Hero Section */}
        <Hero />
        {/* About Us */}
        <AboutUs />
        {/* How The Platform Works */}
        <Intro />
        {/* Subscribe Section */}
        <Subscribe />
        {/* Shop Section */}
        <Shop />
        {/* MVP Features */}
        <MVPFeatures />
        {/* Pricing */}
        <Pricing />
        {/* Testimonials */}
        <Testimonials />
        {/* Download */}
        <Download />
        {/* Guarantee */}
        <Guarantee />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
