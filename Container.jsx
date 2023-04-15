/* istanbul ignore file */
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import { Footer } from "./components/footer/Footer";
import "./Container.css";

import { Contact } from "./components/main/contact/Contact";


function Container() {
  return (
    <>
      <Header />
       <Hero />
      <Contact />
      <Footer />
    </>
  );
}

export default Container;
