import styles from "./header.module.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.header__container}>
        <div lassName={styles.header__filler}></div>
        <ul className={styles.header__items}>
          <li className={styles.header__links}><Link to="/en/" className={styles.header__link} alt="Link to home page">Home</Link></li>
          <div className={styles.header__dash}> | </div>
          <li className={styles.header__links}><Link to="/en/blog/" className={styles.header__link} alt="Link to blog page">Blog</Link></li>
          <div className={styles.header__dash}> | </div>
          <li className={styles.header__links}><Link to="/en/about/" className={styles.header__link} alt="Link to my about page">About Me</Link></li>
        </ul>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle} alt="Color Theme Switch" />
        </div>
      </nav>
    </div>
  );
};

export default Header;

