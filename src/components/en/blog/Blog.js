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
                    <Link to="/en/blog/becameFrontDev" alt="link to an article about how I became a fronted developer">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                Сareer
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/becameFrontDev" alt="link to an article about how I became a fronted developer">
                                <h2 className={styles.article__title}>
                                    From Real Estate to Client Interface Developer: My Journey and Must-Have Resources
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                Discover valuable resources to help yoаu transition from your current profession to front-end developer. Get an in-depth assessment of each resource and see which ones are worth your time and effort!
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Updated: 04.02.2023
                            </div>
                            <div className={styles.article__publish}>
                                Published: 24.01.2023
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/en/blog/lucaDaCostaBook" alt="link to the review of the book about testing">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                Testing
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/lucaDaCostaBook" alt="link to the review of the book about testing">
                                <h2 className={styles.article__title}>
                                    Testing JavaScript by Luca Da Costa: A Comprehensive Review
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                Find out if Testing JavaScript by Luca Da Costa is the right book for you! Read review to discover if this book is perfect for beginners, advanced developers, or anyone in between. Get the inside scoop on what to expect before you buy
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Updated: 04.02.2023
                            </div>
                            <div className={styles.article__publish}>
                                Published:  24.01.2023
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/en/blog/usingLayersInCSS" alt="link to an article about the @layers CSS directive">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                CSS
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/usingLayersInCSS" alt="link to an article about the @layers CSS directive">
                                <h2 className={styles.article__title}>
                                    @layers: A New Way to Organize CSS
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                To address this problem, a new feature has been proposed for CSS: @layers. This feature allows developers to group CSS rules into logical units called layers, and control how they interact with each other. In this article, I will explain what @layers are, how they work, and what are their advantages and disadvantages.
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Updated: 04.02.2023
                            </div>
                            <div className={styles.article__publish}>
                                Published:  24.01.2023
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.article__container}>
                    <Link to="/en/blog/opinionNestingInCSS" alt="link to an article about nesting in native CSS">
                        <div className={styles.article__img}>
                            <img src={M} alt="" className={styles.article__image} />
                            <div className={styles.article__subject}>
                                CSS
                            </div>
                        </div>
                    </Link>
                    <div className={styles.article__boxes}>
                        <div className={styles.article__decr}>
                            <Link to="/en/blog/opinionNestingInCSS" alt="link to an article about nesting in native CSS">
                                <h2 className={styles.article__title}>
                                    CSS Nesting: A Simpler Way to Write Selectors
                                </h2>
                            </Link>
                            <p className={styles.article__text}>
                                CSS is a powerful language for styling web pages, but it can also be verbose and repetitive. One of the common challenges that developers face is writing long and complex selectors that target specific elements or components.
                            </p>
                        </div>
                        <div className={styles.article__date}>
                            <div className={styles.article__update}>
                                Updated: 04.02.2023
                            </div>
                            <div className={styles.article__publish}>
                                Published:  24.01.2023
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

export default Blog