import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../helpers/ThemeContext";
import {Hero, About, Experience, Portfolio, Contact, Footer} from "../../components/en"

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Alexei Ovsyannikov - Frontend Developer from Moscow</title>
      </Helmet>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage