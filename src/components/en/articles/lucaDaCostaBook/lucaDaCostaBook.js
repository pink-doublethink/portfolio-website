import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import styles from "./lucaDaCostaBook.module.scss";
import ImageSlider from "../../../../shared/ImageSlider";

const LucaDaCostaBook = () => {
    const { theme } = useContext(ThemeContext);

    const [parentsWidth, setParentWidth] = useState(300);

    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 750) {
          setParentWidth(500);
        } else {
          setParentWidth(300);
        }
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    const slides = [
        { url: "https://cdna.artstation.com/p/assets/images/images/029/928/844/large/andreas-rocha-timbercrownpathway-web.jpg?1599062603", title: "beach" },
        { url: "https://cdna.artstation.com/p/assets/images/images/034/638/022/large/andreas-rocha-andreas-rocha-cragcrownpathwayweb.jpg?1612821058", title: "boat" },
        { url: "http://localhost:3000/Rt3.jpg", title: "forest" },
        { url: "http://localhost:3000/RT2.jpg", title: "city" },
        { url: "http://localhost:3000/Rt1.jpg", title: "italy" },
        { url: "http://localhost:3000/Rt3.jpg", title: "forest" },
        { url: "http://localhost:3000/RT2.jpg", title: "city" },
    ];
  return (
    <div className={styles[theme]}>
      <div className={styles.article}>
          <div className={styles.article__container}>
              <h1 className={styles.article__title}>Рецензия на книгу "Тестируем JavaScript"</h1>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>О партии</h3>
                  <p className={styles.article__paragraph}>Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора</p>
                  <p className={styles.article__paragraph}>Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. </p>
                  <p className={styles.article__paragraph}>Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. </p>
              </div>
              <div className={styles.slidesContainers}>
                <ImageSlider slides={slides} parentWidth={parentsWidth} />
                </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>О партии</h3>
                  <p className={styles.article__paragraph}>Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора</p>
                  <p className={styles.article__paragraph}>Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. </p>
                  <p className={styles.article__paragraph}>Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>О партии</h3>
                  <p className={styles.article__paragraph}>Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора</p>
                  <p className={styles.article__paragraph}>Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. </p>
                  <p className={styles.article__paragraph}>Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>О партии</h3>
                  <p className={styles.article__paragraph}>Первый ход протекал достаточно плавно. Банды потихоньку сближались. Я использовал **Herd 'Em** 4 раза(по два раза от Пенелопы и Хога) на разных свиней, чтобы те шли вперед. Дима тоже не спешил активировать свои ключивые модели начав ходы с Легии, раздачи апгрейдов с эмиссара, минорных муво Джека и Монтрессора</p>
                  <p className={styles.article__paragraph}>Я тоже не спешил активировать своих ключивых стрелков - Рами и Уликса. Я аккуратно отактивировал Маера и Сквеллира пройдясь ими вперед и сделав концентрацию + Грейси подвезла Рами вперед. Дима решает не тратить Пас Токены и активирует Алису + Паркера  аккуратно пряча их за забором. </p>
                  <p className={`${styles.article__paragraph} ${styles.article__end}`}>Я активирую Уликса делаю два движения вперед, оказываюсь на дистанции стрельбы по Алисе, стреляю поджигаю ее. За Bacon Beeline превращаю сквеллира в вайлд борара. Рами делает движение вперед, стреляет в Алису и не попадает. </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LucaDaCostaBook