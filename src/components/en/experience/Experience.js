import styles from "./experience.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
      <section id="services" className={styles.background}>
        <h5 className={styles.subtitle}>What I Offer</h5>
        <h2 className={styles.title}>Services</h2>
        <div className={`${styles.container} ${styles.exp__container}`}>
          <div className={styles.exp__articles}>
            <article className={styles.exp}>
              <div className={styles.exp__head}>
                <h3>UI/UX Design</h3>
              </div>
              <ul className={styles.exp__list}>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Managed a high volume of interface development projects as a freelancer, consistently meeting project deadlines and client expectations</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Proven mastery of front-end development technologies such as HTML, CSS, and JavaScript through successful freelance projects</p>
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
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Managed a high volume of interface development projects as a freelancer, consistently meeting project deadlines and client expectations</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Proven mastery of front-end development technologies such as HTML, CSS, and JavaScript through successful freelance projects</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Proven mastery of front-end development technologies such as HTML, CSS, and JavaScript through successful freelance projects</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Proven mastery of front-end development technologies such as HTML, CSS, and JavaScript through successful freelance projects</p>
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
                  <p>Proven mastery of front-end development technologies such as HTML, CSS, and JavaScript through successful freelance projects</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Proven mastery of front-end development technologies such as HTML, CSS, and JavaScript through successful freelance projects</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Managed a high volume of interface development projects as a freelancer, consistently meeting project deadlines and client expectations</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Managed a high volume of interface development projects as a freelancer, consistently meeting project deadlines and client expectations</p>
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
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Interacted with clients to conceptualize and develop custom interface solutions for their projects.</p>
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
