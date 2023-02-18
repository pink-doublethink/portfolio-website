import { useContext } from "react";
import { ThemeContext } from "../../../helpers/ThemeContext";
import {Link} from 'react-router-dom';
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles[theme]}>
            <div className={styles.ErrPage}>
                <div className={styles.ErrPage__box}>
                <h1 className={styles.ErrPage__title}>Error 404</h1>
                <p className={styles.ErrPage__text}>The page you are looking for was not found</p>
                <Link href="/en" className={styles.ErrPage__backLink}>
                    Back to home page
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage;