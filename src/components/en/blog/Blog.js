import { useContext } from "react";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { Link } from 'react-router-dom';
import styles from "./blog.module.scss";
import M from "../../../assets/portfolio2.jpg"


const Blog = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles[theme]}>
      <div className={styles.blog}>
        <div className={styles.blog__container}>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/blog/becameFrontDev">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>Боепик</div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/blog/becameFrontDev">
                                <h2 className={styles.article__title}>Мой путь к профессии фронтенд разработчика</h2>
                            </Link>
                            <p className={styles.article__text}>Увидев лидером Джека Доу я испугался кондиций и уже по заготовленному плану заменил свиноматку в изначальной банде на Брина. Увидев вторым мастером титульного Паркера, я сначала не понял что к чему. </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>Обновлено: 04.02.2023</div>
                            <div className={styles.article__publish}>Опубликовано: 24.01.2023</div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/blog/lucaDaCostaBook">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>Боепик</div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/blog/lucaDaCostaBook">
                                <h2 className={styles.article__title}>Рецензия на книгу "Тестируем JavaScript"</h2>
                            </Link>
                            <p className={styles.article__text}>В этой статье я поделюсь своими мыслями, на которые меня натолкнула эта книга</p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>Обновлено: 04.02.2023</div>
                            <div className={styles.article__publish}>Опубликовано: 24.01.2023</div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/blog/lucaDaCostaBook">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>Боепик</div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/blog/lucaDaCostaBook">
                                <h2 className={styles.article__title}>Рецензия на книгу "Тестируем JavaScript"</h2>
                            </Link>
                            <p className={styles.article__text}>В этой статье я поделюсь своими мыслями, на которые меня натолкнула эта книга</p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>Обновлено: 04.02.2023</div>
                            <div className={styles.article__publish}>Опубликовано: 24.01.2023</div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
    </div>
  )
}

export default Blog