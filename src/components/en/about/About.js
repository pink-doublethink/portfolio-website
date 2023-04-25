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
            In the summer of 21, he changed his real estate business to the development of user interfaces. I adhere to the SOLID philosophy in my code. Studying development was not limited to courses and documentation, as well as studying reports from conferences and general development patterns.
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
