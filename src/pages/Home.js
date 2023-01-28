import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../helpers/ThemeContext";
import {Hero, About, Experience, Portfolio, Contact, Footer} from "../components"

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
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

export default Home