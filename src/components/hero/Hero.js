import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import styles from "./hero.module.scss";
import ME from "../../assets/ME.png";
import CV from "../../assets/cv.pdf";
import VK from "../../assets/vk.svg";
import WTA from "../../assets/whatsap.svg";
import { BsTelegram } from "react-icons/bs"; 

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={styles[theme]}>
      <header id="home" className={styles.background}>
        <div className={`${styles.container} ${styles.haeder__container}`}>
          <h5 className={styles.header__subtitle}>Привет, я</h5>
          <h2 className={styles.title}>Алексей</h2>
          <h5 className={styles.subtitle}>Фронтенд Разработчик</h5>
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
          <div className={styles.header__socials}>
            <a href="http://vk.com" target="_blank" rel="noreferrer">
              <img src={VK} alt="ВКонтакте" className={styles.header__icon} />
            </a>
            <a href="http://vk.com" target="_blank" rel="noreferrer">
              <img src={WTA} alt="ВКонтакте" className={styles.header__icon} />
            </a>
            <a href="http://vk.com" target="_blank" rel="noreferrer">
              <BsTelegram className={styles.header__icon} />
            </a>
          </div>
          <div className={styles.me}>
            <img src={ME} alt="me" className={styles.me__image} />
          </div>
          <a href="#contact" className={styles.scroll__down}>
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
};

export default Hero;
