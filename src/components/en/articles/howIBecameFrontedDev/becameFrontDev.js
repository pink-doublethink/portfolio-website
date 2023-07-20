import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import styles from "./becameFrontDev.module.scss";
import ImageSlider from "../../../../shared/slider/ImageSlider";

const BecameFrontDev = () => {
    const { theme } = useContext(ThemeContext);

    const slides = [
      { url: "https://cdna.artstation.com/p/assets/images/images/029/928/844/large/andreas-rocha-timbercrownpathway-web.jpg?1599062603", title: "beach" },
      { url: "https://cdna.artstation.com/p/assets/images/images/034/638/022/large/andreas-rocha-andreas-rocha-cragcrownpathwayweb.jpg?1612821058", title: "boat" },
      { url: "http://localhost:3000/Rt3.jpg", title: "forest" },
      { url: "http://localhost:3000/RT2.jpg", title: "city" },
      { url: "http://localhost:3000/Rt1.jpg", title: "italy" },
  ];

  return (
    <div className={styles[theme]}>
      <div className={styles.article}>
          <div className={styles.article__container}>
              <h1 className={styles.article__title}>
                Рецензия на книгу "Тестируем JavaScript"
              </h1>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are @layers?
                  </h3>
                  <p className={styles.article__paragraph}>
                    @layers are a new type of at-rule in CSS that define a layer of style rules. A layer can contain any CSS rules, such as selectors, properties, media queries, or other at-rules. For example, the following code defines a layer named “base” that contains some basic styles for the body and headings
                  </p>
                  <p className={styles.article__paragraph}>
                    A layer can also contain other layers, creating a hierarchy of layers. For example, the following code defines a layer named “theme” that contains two sub-layers: “dark” and “light”. Each sub-layer defines a different color scheme for the page:
                  </p>
              </div>
              <div className={styles.slidesContainers}>
                <ImageSlider slides={slides} parentWidth={500} />
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    How do @layers work?
                  </h3>
                  <p className={styles.article__paragraph}>
                    Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора
                  </p>
                  <p className={styles.article__paragraph}>
                    Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. 
                  </p>
                  <p className={styles.article__paragraph}>
                    Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. 
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are the advantages of @layers?
                  </h3>
                  <p className={styles.article__paragraph}>
                    Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора
                  </p>
                  <p className={styles.article__paragraph}>
                    Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. 
                  </p>
                  <p className={styles.article__paragraph}>
                    Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. 
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are the disadvantages of @layers?
                  </h3>
                  <p className={styles.article__paragraph}>
                    Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора
                  </p>
                  <p className={styles.article__paragraph}>
                    Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. 
                  </p>
                  <p className={styles.article__paragraph}>
                    Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. 
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    Conclusion
                  </h3>
                  <p className={styles.article__paragraph}>
                    @layers are a new feature in CSS that allow developers to group style rules into logical units called layers and control how they interact with each other. They offer several benefits for organizing and maintaining CSS code but also some challenges for compatibility and adoption. If you are interested in trying out @layers in your projects, you can check out this polyfill or this postcss plugin that enable @layers support in most browsers.
                  </p>
                  <p className={`${styles.article__paragraph} ${styles.article__end}`}>
                    I hope you enjoyed this review of @layers in CSS. If you have any questions or feedback, please let me know in the comments below. 😊
                  </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default BecameFrontDev