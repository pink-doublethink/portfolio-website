import styles from "./HeaderRu.module.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";

const HeaderRu = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.header__container}>
        <div lassName={styles.header__filler}></div>
        <div className={styles.header__items}>
          <a className={styles.header__links}><Link to="/ru/" className={styles.header__link}>Главная</Link></a>
          <div className={styles.header__links}> | </div>
          <a className={styles.header__links}><Link to="/ru/blog/" className={styles.header__link}>Блог</Link></a>
          <div className={styles.header__links}> | </div>
          <a className={styles.header__links}><Link to="/ru/about/" className={styles.header__link}>Обо мне</Link></a>
        </div>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle}/>
        </div>
      </nav>
    </div>
  );
};

export default HeaderRu;

