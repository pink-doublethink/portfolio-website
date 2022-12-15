import "./scss/_main.scss";
import { useContext } from "react";
import { ThemeContext } from "./helpers/ThemeContext";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import About from "./components/about/About"
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
