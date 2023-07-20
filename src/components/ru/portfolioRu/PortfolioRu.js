import styles from "./PortfolioRu.module.scss";
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
    demo: "http://#"
  },
  {
    id: 2,
    image: tabletop,
    title: "Сборник фантастических рассказов",
    github: "https://github.com/pink-doublethink/malifaux.ru",
    demo: "https://malifaux.ru"
  },
  {
    id: 3,
    image: empatphy,
    title: "Блог об Эмпатии",
    github: "https://github.com/pink-doublethink/empathy.doublethink.pink",
    demo: "http://empathy.doublethink.pink"
  },
  {
    id: 4,
    image: ecomerce,
    title: "Личный комбинет интернет магазина",
    github: "https://github.com/pink-doublethink/app.malifaux.ru",
    demo: "http://app.malifaux.ru/"
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
    title: "Статистика о странах мира",
    github: "https://github.com/pink-doublethink/regions-website",
    demo: "https://cheerful-hummingbird-13fc77.netlify.app/"
  }
];

const PortfolioRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="portfolio" className={styles.portfolio}>
        <h5 className={styles.subtitle}>портфолио</h5>
        <h2 className={styles.title}>Мои недавнии работы</h2>
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
                    Демо
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

export default PortfolioRu;
