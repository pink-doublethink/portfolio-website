import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../context/ThemeContext";
import { UsingLayersInCSSRu, FooterRu } from "../../../components/ru"

const UsingLayersInCSSPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Рецензия на книгу "Тестируем JavaScript"</title>
        <meta
          name="description"
          content="Узнайте, подходит ли вам книга Луки Да Коста «Тестирование JavaScript»! Прочтите обзор, чтобы узнать, подходит ли эта книга для начинающих, продвинутых разработчиков или тех, кто находится между ними. Получите внутреннюю информацию о том, чего ожидать, прежде чем покупать."
        />
        <meta 
          name="author" 
          content="Алексей Овсянников" 
        />
      </Helmet>
      <UsingLayersInCSSRu/>
      <FooterRu/>
    </div>
  );
}

export default UsingLayersInCSSPageRu