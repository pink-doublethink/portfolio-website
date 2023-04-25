import styles from "./portfolio.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import estate from "../../../assets/img/estate.png";
import tabletop from "../../../assets/img/tabletop.jpg";
import empatphy from "../../../assets/img/empatphy.png";
import ecomerce from "../../../assets/img/ecomerce.png";
import rozanova from "../../../assets/img/rozanova.png";
import country from "../../../assets/img/country.webp";

const data = [
  {
    id: 1,
    image: estate,
    title: "Real Estate Website",
    github: "https://github.com/pink-doublethink/real-estate-website",
    demo: "htt://"
  },
  {
    id: 2,
    image: tabletop,
    title: "Tabletop forum",
    github: "https://github.com/pink-doublethink/malifaux.ru",
    demo: "http://malifaux.ru"
  },
  {
    id: 3,
    image: empatphy,
    title: "Empatphy Mesum",
    github: "https://github.com/pink-doublethink/empathy.doublethink.pink",
    demo: "http://empathy.doublethink.pink"
  },
  {
    id: 4,
    image: ecomerce,
    title: "Pulsometr Landing Page",
    github: "https://github.com/pink-doublethink/air-commercial-website",
    demo: "http://#"
  },
  {
    id: 5,
    image: rozanova,
    title: "Olga Rozanova Website",
    github: "https://github.com/pink-doublethink/rozanova.doublethink.pink",
    demo: "http://rozanova.doublethink.pink"
  },
  {
    id: 6,
    image: country,
    title: "Country Info",
    github: "https://github.com/pink-doublethink/real-estate-website",
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
