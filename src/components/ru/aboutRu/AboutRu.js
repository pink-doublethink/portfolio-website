import styles from "./AboutRu.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../helpers/ThemeContext";
import meJpg from "../../../assets/img/me-about.JPG";
import meAvif from "../../../assets/img/me-about-Av.avif";
import meWebp from "../../../assets/img/me-about-Wp.webp";

const AboutRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="about" className={`${styles.about} ${styles.background}`}>
        <div className={`${styles.container} ${styles.about__container}`}>
          <div className={styles.about__me_image}>
            <picture width="450" height="700">
              <source srcSet={meWebp} type="image/webp" />
              <source srcSet={meAvif} type="image/avif" />
              <img src={meJpg} alt="About me" className={styles.about__image} />
            </picture>
          </div>
          <div className={styles.about__content}>
            <h2 className={styles.title}>Биография</h2>
            <p className={`${styles.about__text} ${styles.about__text_info}`}>
            Летом 21 года сменил занятие риэлтерским делом на разработку пользовательских интерфейсов. В своем коде придерживаюсь философии SOLID. Изучая разработку не ограничивался курсами и документацией, так же изучая доклады с конференций и общие паттерны разработки.
            </p>
            <p className={`${styles.about__text} ${styles.about__text_abuot}`}>
            Работая над проектами мне бы хотелось создавать продукты, расширяющие возможности людей. Хочу стать частью Scrum орентированной команды и видеть результаты в конкретном сервисе или услуге.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutRu;
