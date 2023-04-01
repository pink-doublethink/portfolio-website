import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
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
                    <Link to="/en/blog/becameFrontDev">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>Боепик</div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/becameFrontDev">
                                <h2 className={styles.article__title}>From Real Estate to Client Interface Developer: My Journey and Must-Have Resources</h2>
                            </Link>
                            <p className={styles.article__text}>Discover valuable resources to help you transition from your current profession to front-end developer. Get an in-depth assessment of each resource and see which ones are worth your time and effort!</p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>Updated: 04.02.2023</div>
                            <div className={styles.article__publish}>Published: 24.01.2023</div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/en/blog/lucaDaCostaBook">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>Боепик</div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/lucaDaCostaBook">
                                <h2 className={styles.article__title}>Testing JavaScript by Luca Da Costa: A Comprehensive Review</h2>
                            </Link>
                            <p className={styles.article__text}>Find out if Testing JavaScript by Luca Da Costa is the right book for you! Read review to discover if this book is perfect for beginners, advanced developers, or anyone in between. Get the inside scoop on what to expect before you buy</p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>Updated: 04.02.2023</div>
                            <div className={styles.article__publish}>Published:  24.01.2023</div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/en/blog/lucaDaCostaBook">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>Боепик</div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/lucaDaCostaBook">
                                <h2 className={styles.article__title}>Testing JavaScript by Luca Da Costa: A Comprehensive Review</h2>
                            </Link>
                            <p className={styles.article__text}>Find out if Testing JavaScript by Luca Da Costa is the right book for you! Read review to discover if this book is perfect for beginners, advanced developers, or anyone in between. Get the inside scoop on what to expect before you buy</p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>Updated: 04.02.2023</div>
                            <div className={styles.article__publish}>Published:  24.01.2023</div>
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