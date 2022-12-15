import styles from "./footer.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import VK from "../../assets/vk.svg";
import WTA from "../../assets/whatsap.svg";
import TG from "../../assets/telegram.svg";
import LinkIn from "../../assets/icons/github.png";
import GitHub from "../../assets/icons/linkedin.png";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <div className={styles[theme]}>
            <footer className={styles.footer}>
                <div className={styles.footer__contanier}>
                    <div className={styles.footer__logo}>
                        <h3 className={styles.footer__initials}>
                            <i>Алексей Овсянников</i>
                        </h3>
                    </div>
                    <div></div>
                    <div className={styles.footer__social}>
                        <ul className={styles.footer__ul}>
                            <li className={styles.footer__li}><a href="#home" className={styles.footer__a}><img src={GitHub} alt="GitHub" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="#home"  className={styles.footer__a}><img src={LinkIn} alt="LinkedIn" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="#home"  className={styles.footer__a}><img src={TG} alt="Telegram" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="#home"  className={styles.footer__a}><img src={VK} alt="Vkontacte" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="#home"  className={styles.footer__a}><img src={WTA} alt="WhatsUp" className={styles.footer__img}/></a></li>
                        </ul>
                    </div> 
                </div>
            </footer>
        </div>
    )
}

export default Footer;