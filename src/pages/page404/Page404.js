import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import styles from "./page404.module.scss";

const Page404 = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles[theme]}>
            <Helmet>
                <title>Cтраница не найдена</title>
            </Helmet>
            <div className={styles.ErrPage}>
                <div className={styles.ErrPage__box}>

                </div>
                <h1 className={styles.ErrPage__title}>Ошибка 404</h1>
                <p className={styles.ErrPage__text}>Cтраница, которую вы ищете, не найдена</p>
                <Link href="/" className={styles.ErrPage__backLink}>
                    Вернуться к домашний странице
                </Link>
            </div>
        </div>
    )
}

export default Page404;