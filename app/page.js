
'use client'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroSection from "./component/HeroSection";
import About from "./component/About";
import Service from "./component/Service";
import Product from "./component/Product";
import ContactPage from "./component/Contact";



export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <HeroSection/>
      <About/>
      <Service/>
     <Product/>
     <ContactPage/>
    </div>
  );
}
