import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Link } from 'react-router-dom';
import styles from "./BlogRu.module.scss";
import developerWay from "../../../assets/img/developerWay.JPG"
import nesting from "../../../assets/img/nesting.jpeg"
import bookReview from "../../../assets/img/bookReview.png"


const BlogRu = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={styles[theme]}>
      <div className={styles.blog}>
        <div className={styles.blog__container}>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/ru/blog/becameFrontDev" alt="ссылка на статью о том, как я стал фронтальным разработчиком">
                        <div className={styles.article__img}>
                            <img src={developerWay} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                Сareer
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/ru/blog/becameFrontDev" alt="ссылка на статью о том, как я стал фронтальным разработчиком">
                                <h2 className={styles.article__title}>
                                    Мой путь к профессии фронтенд разработчика
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                Увидев лидером Джека Доу я испугался кондиций и уже по заготовленному плану заменил свиноматку в изначальной банде на Брина. Увидев вторым мастером титульного Паркера, я сначала не понял что к чему. 
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Обновлено: 04.02.2023
                                </div>
                            <div className={styles.article__publish}>
                                Опубликовано: 24.01.2023
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/ru/blog/lucaDaCostaBook" alt="ссылка на рецензию на книгу о тестировании">
                        <div className={styles.article__img}>
                            <img src={bookReview} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                Testing
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/ru/blog/lucaDaCostaBook" alt="ссылка на рецензию на книгу о тестировании">
                                <h2 className={styles.article__title}>
                                    Рецензия на книгу "Тестируем JavaScript"
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                В этой статье я поделюсь своими мыслями, на которые меня натолкнула эта книга
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Обновлено: 04.02.2023
                            </div>
                            <div className={styles.article__publish}>
                                Опубликовано: 24.01.2023
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/ru/blog/opinionNestingInCSS" alt="ссылка на статью о вложенности в нативном CSS">
                        <div className={styles.article__img}>
                            <img src={nesting} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                CSS
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/ru/blog/opinionNestingInCSS" alt="ссылка на статью о вложенности в нативном CSS">
                                <h2 className={styles.article__title}>
                                    Вложенность CSS: Более простой способ написания селекторов
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                CSS - это мощный язык для оформления веб-страниц, но он также может быть сложным и трудным в поддержке. Одной из распространенных проблем, с которыми сталкиваются разработчики, является управление каскадом и спецификой правил CSS, особенно при работе с большими кодовыми базами или несколькими авторами.
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Обновлено: 04.02.2023
                            </div>
                            <div className={styles.article__publish}>
                                Опубликовано: 24.01.2023
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
    </div>
  )
}

export default BlogRu