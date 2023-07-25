import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./HeroRu.module.scss";
import MEpng from "../../../assets/img/ME.png";
import MEavif from "../../../assets/img/ME-Av.avif";
import MEwebp from "../../../assets/img/ME-Wp.webp";
import TG from "../../../assets/telegram.svg";
import CV from "../../../assets/Овсянников-Алексей_Фронтенд-разработчик.pdf";

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
            <a 
              href={CV} 
              download 
              className={styles.btn}
            >
              Скачать CV
            </a>
            <a
              href="https://t.me/pink_doublethink" 
              target="_blank" 
              rel="noreferrer"
              className={`${styles.hero__btn} ${styles.btn} ${styles.btn_primary}`}
              alt="Link to Telegram profile"
            >
              <img src={TG} alt="Telegram" className={styles.hero__tg}/>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroRu;
