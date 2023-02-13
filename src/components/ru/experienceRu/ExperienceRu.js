import styles from "./ExperienceRu.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ExperienceRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="services" className={styles.background}>
        <h5 className={styles.subtitle}>Что я предлагаю</h5>
        <h2 className={styles.title}>услуги</h2>
        <div className={`${styles.container} ${styles.exp__container}`}>
          <div className={styles.exp__articles}>
            <article className={styles.exp}>
              <div className={styles.exp__head}>
                <h3>UI/UX Design</h3>
              </div>
              <ul className={styles.exp__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Разрабатывал и поддерживал дизайн-системы и руководства по стилю</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал каркасы, прототипы и высокоточные макеты для эффективной передачи дизайнерских идей</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Спроектировал и разработал каркасы и прототипы веб- и мобильных интерфейсов</p>
                </li>
              </ul>
            </article>
            <article className={styles.exp}>
              <div className={styles.exp__head}>
                <h3>UI/UX Design</h3>
              </div>
              <ul className={styles.exp__list}>
              <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Спроектировал и разработал каркасы и прототипы веб- и мобильных интерфейсов</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Спроектировал и разработал каркасы и прототипы веб- и мобильных интерфейсов</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
              </ul>
            </article>
            <article className={styles.exp}>
              <div className={styles.exp__head}>
                <h3>Web Development</h3>
              </div>
              <ul className={styles.exp__list}>
              <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Спроектировал и разработал каркасы и прототипы веб- и мобильных интерфейсов</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Спроектировал и разработал каркасы и прототипы веб- и мобильных интерфейсов</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
              </ul>
            </article>
            <article className={styles.exp}>
              <div className={styles.exp__head}>
                <h3>Content Creation</h3>
              </div>
              <ul className={styles.exp__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Спроектировал и разработал каркасы и прототипы веб- и мобильных интерфейсов</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
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

export default ExperienceRu;
