import styles from "./experience.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="services" className={styles.background}>
        <h5 className={styles.subtitle}>What I Offer</h5>
        <h2 className={styles.title}>Services</h2>
        <div className={`${styles.container} ${styles.services__container}`}>
          <div className={styles.services__articles}>
            <article className={styles.services}>
              <div className={styles.services__head}>
                <h3>UI/UX Design</h3>
              </div>
              <ul className={styles.services__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
              </ul>
            </article>
            <article className={styles.services}>
              <div className={styles.services__head}>
                <h3>UI/UX Design</h3>
              </div>
              <ul className={styles.services__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
              </ul>
            </article>
            <article className={styles.services}>
              <div className={styles.services__head}>
                <h3>Web Development</h3>
              </div>
              <ul className={styles.services__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
              </ul>
            </article>
            <article className={styles.services}>
              <div className={styles.services__head}>
                <h3>Content Creation</h3>
              </div>
              <ul className={styles.services__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.services__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
