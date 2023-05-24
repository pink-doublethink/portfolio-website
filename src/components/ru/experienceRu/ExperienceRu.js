import styles from "./ExperienceRu.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
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
                <h3>Web Development</h3>
              </div>
              <ul className={styles.exp__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Участвовал в создание макетов и интерактивных прототипов с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал каркасы, прототипы и высокоточные макеты для эффективной передачи дизайнерских идей</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал корректные цветовые сочитания цветовых схем в  соотвествии с критериями контрастности для сайтов</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал адаптации компонентов сайтов для мобильных версий на основе принцепов дизайна</p>
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
                  <p>Участвовал в разработке дизайн-системы и созданию руководства по стилю</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
                </li>
              </ul>
            </article>
            <article className={styles.exp}>
              <div className={styles.exp__head}>
                <h3>Soft Skills</h3>
              </div>
              <ul className={styles.exp__list}>
              <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Оцениваю гибкие навыки как любые навыки, что не являются Хард навыками, но требуются для успешного проекта</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Считаю важным обсуждение любые детали  проекта на любом его этапе</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Создавал высокоточные макеты и интерактивные прототипы с помощью программного обеспечения для дизайна, такого как Adobe Creative Suite или Sketch</p>
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
                  <p>Интегрировал системы управления контентом (CMS), такие как WordPress или Sanity</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Взаимодействие с создателями контента для внесения изменений в дизайн и макет</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Обеспечиваю одинаковую доступность материалов сайта и для скрин ридеров, и для обычных пользователей</p>
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
