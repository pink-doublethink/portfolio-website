import styles from "./FooterRu.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../helpers/ThemeContext";
import VK from "../../../assets/vk.svg";
import WTA from "../../../assets/whatsap.svg";
import TG from "../../../assets/telegram.svg";
import LinkIn from "../../../assets/icons/github.png";
import GitHub from "../../../assets/icons/linkedin.png";

const FooterRu = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <div className={styles[theme]}>
            <footer className={styles.footer}>
                <div className={styles.footer__contanier}>
                    <div className={styles.footer__logo}>
                        <i className={styles.footer__initials}>
                            Алексей Овсянников
                        </i>
                    </div>
                    <div></div>
                    <div className={styles.footer__social}>
                        <ul className={styles.footer__ul}>
                            <li className={styles.footer__li}><a href="https://www.linkedin.com/in/alexei-ovsyannikov/"target="_blank" rel="noreferrer" className={styles.footer__a}><img src={GitHub} alt="GitHub" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="https://github.com/pink-doublethink" target="_blank" rel="noreferrer" className={styles.footer__a}><img src={LinkIn} alt="LinkedIn" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="https://t.me/pink_doublethink" target="_blank" rel="noreferrer" className={styles.footer__a}><img src={TG} alt="Telegram" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="https://vk.com/dark_maestro" target="_blank" rel="noreferrer" className={styles.footer__a}><img src={VK} alt="Vkontacte" className={styles.footer__img}/></a></li>
                            <li className={styles.footer__li}><a href="#home" target="_blank" rel="noreferrer" className={styles.footer__a}><img src={WTA} alt="WhatsUp" className={styles.footer__img}/></a></li>
                        </ul>
                    </div> 
                </div>
            </footer>
        </div>
    )
}

export default FooterRu;