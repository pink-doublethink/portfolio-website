import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";
import {Hero, About, Experience, Portfolio, Contact, Footer} from "../../components/en"

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme} style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Alexei Ovsyannikov - Frontend Developer from Moscow</title>
        <meta
          name="description"
          content="Frontend developer with React / Next.js / TypeScript experience. Working on projects, I am interested in creating Products that empower people."
        />
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