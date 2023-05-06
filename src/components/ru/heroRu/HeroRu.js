import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./HeroRu.module.scss";
import MEpng from "../../../assets/img/ME.png";
import MEavif from "../../../assets/img/ME-Av.avif";
import MEwebp from "../../../assets/img/ME-Wp.webp";
import CV from "../../../assets/Овсянников_Алексей_Фронтенд_разработчик.pdf";

const HeroRu = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={styles[theme]}>
      <header id="home" className={styles.hero}>
        <div className={`${styles.container} ${styles.hero__container}`}>
          <h5 className={styles.hero__subtitle}>Привет, я</h5>
          <h2 className={styles.title}>Алексей</h2>
          <h5 className={styles.subtitle}>Фронтенд Разработчик</h5>
          <div className={styles.me}>
            <picture>
              <source srcSet={MEwebp} type="image/webp" />
              <source srcSet={MEavif} type="image/avif" />
              <img src={MEpng} alt="me" className={styles.me__image} />
            </picture>
          </div>
          <div className={styles.cta}>
            <a href={CV} download className={styles.btn}>
              Download CV
            </a>
            <a
              href="#contact"
              className={`${styles.btn} ${styles.btn_primary}`}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroRu;
