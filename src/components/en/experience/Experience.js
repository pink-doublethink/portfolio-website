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
                <h3>Web Development</h3>
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
                  <p>Participated in creating layouts and interactive prototypes using design software such as Adobe Creative Suite or Sketch</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Participated in the development of the design system and the creation of the style guide</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Created the correct color combinations of color schemes in accordance with the contrast criteria for sites</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>Created adaptations of website components for mobile versions based on design principles</p>
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
                  <p>Evaluate soft skills as any skills that are not Hard skills, but are required for a successful project</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                  <p>I believe it is important to discuss any details of the project at any stage;</p>
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
                    <p>Integrated content management systems (CMS), such as WordPress or Sanity</p>
                  </li>
                  <li>
                    <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                    <p>Interact with content creators to make design and layout changes</p>
                  </li>
                  <li>
                    <IoIosCheckmarkCircleOutline className={styles.exp__list_icon} />
                    <p>Ensuring equal accessibility of the site materials for screen readers and ordinary users</p>
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
