import styles from "./header.module.scss";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../helpers/ThemeContext";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";
import MEE from "../../assets/favicon/favicon.ico";

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
          <button className={styles.header__links}><Link to="/" className={styles.header__link}>Home</Link></button>
          <div className={styles.header__links}> | </div>
          <button className={styles.header__links}><Link to="/blog" className={styles.header__link}>Blog</Link></button>
        </div>
        <div className={styles.header__switchTheme}>
         <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.nav__themeTogle}/>
        </div>
      </nav>
    </div>
  );
};

export default Header;

