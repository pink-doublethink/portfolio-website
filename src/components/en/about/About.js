import styles from "./about.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import meJpg from "../../../assets/img/me-about.JPG";
import meAvif from "../../../assets/img/me-about-Av.avif";
import meWebp from "../../../assets/img/me-about-Wp.webp";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <article id="about" className={`${styles.about} ${styles.background}`}>
        <div className={`${styles.container} ${styles.about__container}`}>
          <div className={styles.about__me_image}>
            <picture width="450" height="700">
              <source srcSet={meWebp} type="image/webp" />
              <source srcSet={meAvif} type="image/avif" />
              <img src={meJpg} alt="About me" className={styles.about__image} />
            </picture>
          </div>
          <div className={styles.about__content}>
            <h2 className={styles.title}>Biography</h2>
            <p className={`${styles.about__text} ${styles.about__text_info}`}>
            IT specialist in creating user-friendly and accessible interfaces. Worked as a freelance web developer, realtor, analyst, boardgame developer, boardgame club administrator. Last years focused on SPA applications on React and libraries around this framework.
            </p>
            <p className={`${styles.about__text} ${styles.about__text_info}`}>
            I went from being an apologist of functional programming to realizing that it is necessary to find a compromise between business processes and code cleanliness. Having studied the React ecosystem and its main libraries, I did not stop studying related web technologies: Nest.js, webAssembly, SQL & noSQL, Rust.
            </p>
            <p className={`${styles.about__text} ${styles.about__text_abuot}`}>
            When working on projects, I would like to create products that empower people. I want to become part of a Scrum oriented team and see results in a specific service or service.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default About;
