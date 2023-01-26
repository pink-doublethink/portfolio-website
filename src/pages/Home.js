import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {Hero, About, Experience, Portfolio, Contact, Footer} from "../components"

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