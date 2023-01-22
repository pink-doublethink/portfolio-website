import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import Hero from "../components/hero/Hero";
import About from "../components/about/About"
import Experience from "../components/experience/Experience";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";




const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home