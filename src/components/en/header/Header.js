import styles from "./header.module.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.header__container}>
        {/* <div className={styles.header__logo}>
        <Link to="/en/" className={styles.header__link}><img src={logo} alt="About me"  className={styles.header__img} /></Link>
        </div> */}
        <div lassName={styles.header__filler}></div>
        <div className={styles.header__items}>
          <a className={styles.header__links}><Link to="/en/" className={styles.header__link}>Home</Link></a>
          <div className={styles.header__links}> | </div>
          <a className={styles.header__links}><Link to="/en/blog/" className={styles.header__link}>Blog</Link></a>
          <div className={styles.header__links}> | </div>
          <a className={styles.header__links}><Link to="/en/about/" className={styles.header__link}>About Me</Link></a>
        </div>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle}/>
        </div>
      </nav>
    </div>
  );
};

export default Header;

