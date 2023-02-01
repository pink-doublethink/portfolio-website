import { useContext } from "react";
import { ThemeContext } from "../../../../helpers/ThemeContext";
import styles from "./lucaDaCostaBookRu.module.scss";

const LucaDaCostaBookRu = () => {
    const { theme } = useContext(ThemeContext);
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

export default LucaDaCostaBookRu