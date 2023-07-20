import styles from "./AboutRu.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import meJpg from "../../../assets/img/me-about.JPG";
import meAvif from "../../../assets/img/me-about-Av.avif";
import meWebp from "../../../assets/img/me-about-Wp.webp";

const AboutRu = () => {
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
            <h2 className={styles.title}>Биография</h2>
            <p className={`${styles.about__text} ${styles.about__text_info}`}>
              Cпециалист по созданию удобных и доступных интерфейсов. Работал внештатным веб-разработчиком, аналитиком, риэлтором, разработчиком настольных игр. Последние годы занимался SPA-приложениями на React и библиотеками вокруг этого фреймворка.
            </p>
            <p className={`${styles.about__text} ${styles.about__text_info}`}>
              Прошел путь от апологета функционального программирования до осознания того, что необходимо находить компромисс между бизнес-процессами и чистотой кода. Изучив экосистему React и ее основные библиотеки, не перестал изучать смеежные веб технологии: Nest.js, SQL & noSQL, webAssembly.
            </p>
            <p className={`${styles.about__text} ${styles.about__text_abuot}`}>
              Работая над проектами мне бы хотелось создавать продукты, расширяющие возможности людей. Хочу стать частью Scrum орентированной команды и видеть результаты в конкретном сервисе или услуге.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default AboutRu;
