import styles from "./about.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import MEE from "../../assets/me-about.JPG";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="about" className={`${styles.about} ${styles.background}`}>
        {/* <h5 className={styles.subtitle}>Биография</h5>
        <h2 className={styles.title}>себе</h2>*/}
        <div className={`${styles.container} ${styles.about__container}`}>
          {/* <div className={styles.about__me}>
            <div className={styles.about__me_image}>
              <img src={MEE} alt="About me" />
            </div>
          </div> */}
          <div className={styles.about__me_image}>
              <img src={MEE} alt="About me" className={styles.about__image} width="450" height="700" />
            </div>
          <div className={styles.about__content}>
            {/* <div className={styles.about__cards}>
              <article className={styles.about__card}>
                <FaAward className={styles.about__icon} />
                <h5>Опыт</h5>
                <small>2+ Года</small>
              </article>
              <article className={styles.about__card}>
                <FiUsers className={styles.about__icon} />
                <h5>Clients</h5>
                <small>100+ Worlwide</small>
              </article>
              <article className={styles.about__card}>
                <VscFolderLibrary className={styles.about__icon} />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div> */}
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
