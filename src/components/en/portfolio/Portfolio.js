import styles from "./portfolio.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../helpers/ThemeContext";
import IMG2 from "../../../assets/portfolio2.jpg";


const data = [
  {
    id: 1,
    image: IMG2,
    title: "Real Estate Website",
    github: "http://#",
    demo: "http://#"
  },
  {
    id: 2,
    image: IMG2,
    title: "Tabletop forum",
    github: "http://#",
    demo: "http://#"
  },
  {
    id: 3,
    image: IMG2,
    title: "Empatphy Mesum",
    github: "http://#",
    demo: "http://#"
  },
  {
    id: 4,
    image: IMG2,
    title: "Pulsometr Landing Page",
    github: "http://#",
    demo: "http://#"
  },
  {
    id: 5,
    image: IMG2,
    title: "Olga Rozanova Website",
    github: "http://#",
    demo: "http://#"
  },
  {
    id: 6,
    image: IMG2,
    title: "Country Info",
    github: "http://#",
    demo: "http://#"
  }
];

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="portfolio" className={styles.portfolio}>
        <h5 className={styles.subtitle}>Portfolio</h5>
        <h2 className={styles.title}>My Recent Work</h2>
        <div className={`${styles.container} ${styles.portfolio__container}`}>
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className={styles.portfolio__item}>
                <div className={styles.portfolio__item_image}>
                  <img src={image} alt={title} />
                </div>
                <h3 className={styles.portfolio__title}>{title}</h3>
                <div className={styles.portfolio__item_cta}>
                  <a href={github} className={styles.btn} tarhet="_blank">
                    Github
                  </a>
                  <a
                    href={demo}
                    className={`${styles.btn} ${styles.btn_primary}`}
                    tarhet="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
