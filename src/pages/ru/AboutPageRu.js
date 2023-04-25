import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";
import {AboutRu, ExperienceRu, FooterRu} from "../../components/ru"

const AboutPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Alexei Ovsyannikov - Frontend Developer from Moscow</title>
        <meta
          name="description"
          content="Frontend developer with React / Next.js / TypeScript experience. Working on projects, I am interested in creating Products that empower people."
        />
      </Helmet>
      <AboutRu />
      <ExperienceRu />
      <FooterRu />
    </div>
  );
}

export default AboutPageRu