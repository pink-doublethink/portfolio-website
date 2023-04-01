import styles from "./contact.module.scss";
import { useContext, useRef } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";
import emailjs from '@emailjs/browser';
import TG from "../../../assets/telegram.svg";
import VK from "../../../assets/vk.svg";
import WTA from "../../../assets/whatsap.svg";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs"; 

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z0p9zyh",
      "template_bkvblmh",
      form.current,
      "2T2nLJKMNAkRFMGZg"
    );

    e.target.reset();
  };

  return (
    <div className={styles[theme]}>
      <section
        className={`${styles.contacts} ${styles.background}`}
        id="contact"
      >
        <h5 className={styles.subtitle}>Contacts</h5>
        <h2 className={styles.tittle}>Contact me</h2>
        <div className={styles.container1}>
          <div className={styles.contacts__wrapper}>
            <div className={styles.contacts__photo}>
              <div className={styles.contact__options}>
                <article className={styles.contact__option}>
                  <BsTelegram className={`${styles.contact__option_icon} ${styles.contact__option_TG}`} />
                  <h4>Messenger</h4>
                  <h5>343434222</h5>
                  <a href="http://#" className={styles.contact__a}>Send Messange</a>
                </article>
                <article className={styles.contact__option}>
                  <BsWhatsapp className={`${styles.contact__option_icon} ${styles.contact__option_WhAp}`} />
                  <h4>Email</h4>
                  <h5>34342</h5>
                  <a href="http://#" className={styles.contact__a}>Send Messange</a>
                </article>
                <article className={styles.contact__option}>
                  <MdOutlineEmail className={`${styles.contact__option_icon} ${styles.contact__option_Em}`} />
                  <h4>Email</h4>
                  <h5>soliterco@gmail.com</h5>
                  <a href="http://#" className={styles.contact__a}>Send Messange</a>
                </article>
              </div>
            </div>
            <div className={styles.contacts__descr}>
              <h5
                className={`${styles.title} ${styles.title_fz16} ${styles.contacts__title}`}
              >
                Contacts
              </h5>
              <h2
                className={`${styles.title} ${styles.title_fz36} ${styles.contacts__subtitle}`}
              >
                Contact me
              </h2>

              <div
                className={`${styles.title} ${styles.title_fz14} ${styles.contacts__text}`}
              >
                In any way convenient for you
              </div>
              <div className={styles.contacts__social}>
                <a href="http://#" className={styles.contacts__link}>
                  <img src={TG} alt="telegram" />
                </a>
                <a href="http://#" className={styles.contacts__link}>
                  <img src={WTA} alt="whatsapp" />
                </a>
                <a href="http://#" className={styles.contacts__link}>
                  <img src={VK} alt="ВКонтакте" />
                </a>
              </div>
              <div
                className={`${styles.title} ${styles.title_fz14} ${styles.contacts__text}`}
              >
                Or leave your details and I will write to you
              </div>

              <form
                className={styles.contacts__form}
                ref={form}
                onSubmit={sendEmail}
              >
                <div
                  className={`${styles.contacts__input} ${styles.gradientInputAnimation}`}
                >
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className={styles.gradientInputAnimation__input}
                    required
                  />
                  <span className={styles.gradientInputAnimation__sp}>
                  Your name
                  </span>
                  <i className={styles.gradientInputAnimation__i}></i>
                </div>

                <div
                  className={`${styles.contacts__input} ${styles.gradientInputAnimation}`}
                >
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className={styles.gradientInputAnimation__input}
                    required
                  />
                  <span className={styles.gradientInputAnimation__sp}>
                  Your mail
                  </span>
                  <i className={styles.gradientInputAnimation__i}></i>
                </div>

                <div
                  className={`${styles.contacts__input} ${styles.gradientInputAnimation}`}
                >
                  <textarea
                    name="text"
                    id="text"
                    className={styles.gradientInputAnimation__input}
                    required
                  ></textarea>
                  <span className={styles.gradientInputAnimation__sp}>
                    your message
                  </span>
                  <i className={styles.gradientInputAnimation__i}></i>
                </div>
                <div className={styles.contacts__triggers}>
                  <button
                    className={`${styles.contacts__btn} ${styles.btn} ${styles.btn_primary}`}
                  >
                    send
                  </button>
                  <div className={styles.contacts__policy}>
                    <input required type="checkbox" />
                    <span>
                      I agree with {" "}
                      <Link to="/en/privacy"><span className={styles.contacts__policyText}>privacy policy</span></Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact