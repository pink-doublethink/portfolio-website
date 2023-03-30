import styles from "./header.module.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src='sss.png' alt="About me"  className={styles.header__img} />
        </div>
        <div className={styles.header__items}>
          <button className={styles.header__links}><Link to="/en" className={styles.header__link}>Home</Link></button>
          <div className={styles.header__links}> | </div>
          <button className={styles.header__links}><Link to="/en/blog" className={styles.header__link}>Articles</Link></button>
        </div>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle}/>
        </div>
      </nav>
    </div>
  );
};

export default Header;

