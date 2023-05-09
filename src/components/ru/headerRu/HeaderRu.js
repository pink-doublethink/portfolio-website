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
        <ul className={styles.header__items}>
          <li className={styles.header__links}><Link to="/ru/" className={styles.header__link} alt="Ссылка на главную">Главная</Link></li>
          <div className={styles.header__links}> | </div>
          <li className={styles.header__links}><Link to="/ru/blog/" className={styles.header__link} alt="Ссылка на страницу блога">Блог</Link></li>
          <div className={styles.header__links}> | </div>
          <li className={styles.header__links}><Link to="/ru/about/" className={styles.header__link} alt="Ссылка на страницу обо мне">Обо мне</Link></li>
        </ul>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle} alt="Переключение цветовой темы" />
        </div>
      </nav>
    </div>
  );
};

export default HeaderRu;

