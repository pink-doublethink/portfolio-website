import styles from "./about.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import MEE from "../../assets/me-about.JPG";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="about" className={`${styles.about} ${styles.background}`}>
        <div className={`${styles.container} ${styles.about__container}`}>
          <div className={styles.about__me_image}>
              <img src={MEE} alt="About me" className={styles.about__image} width="450" height="700" />
            </div>
          <div className={styles.about__content}>
            <h2 className={styles.title}>Биография</h2>
            <p className={`${styles.about__text} ${styles.about__text_info}`}>
            Летом 21 года сменил занятие риэлторским делом на разработку пользовательский интерфесов. Изучая разработку неограничевался курсами и документацией, так же изучая доклады с конференций и общие тендеции фронтенд разработки.
            </p>
            <p className={`${styles.about__text} ${styles.about__text_abuot}`}>
            Фанат чистого CSS, редких интересных свойств. Люблю сужать и расширять типы в тайпскрипте. В планах на 23 изучение Node.js. Увлечен возможностями быстро развивающего языка JavaScript. В своем коде придерживаюсь филосовии SOLID.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
