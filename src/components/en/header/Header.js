import styles from "./header.module.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../helpers/ThemeContext";
import MEE from "../../../assets/favicon/favicon.ico";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.header__container}>
        <div></div>
        <div className={styles.header__logo}>
          <img src={MEE} alt="About me"  className={styles.header__img} />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles.header__items}>
          <button className={styles.header__links}><Link to="/" className={styles.header__link}>Обо мне</Link></button>
          <div className={styles.header__links}> | </div>
          <button className={styles.header__links}><Link to="/blog" className={styles.header__link}>Статьи</Link></button>
        </div>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle}/>
        </div>
      </nav>
    </div>
  );
};

export default Header;

