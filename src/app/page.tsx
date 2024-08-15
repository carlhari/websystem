import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Navigation from "./components/Navigation";
import News from "./components/News";
import Service from "./components/Service";

export default function Home() {
  return (
    <div className="main-wrapper">
      <Navigation />
      <ImageCarousel />
      <Service />
      <AboutUs />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
