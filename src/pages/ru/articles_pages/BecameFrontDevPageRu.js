import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../context/ThemeContext";
import { BecameFrontDevRu, FooterRu } from "../../../components/ru"

const BecameFrontDevPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Мой путь к профессии фронтенд разработчика</title>
        <meta
          name="description"
          content="Откройте для себя ценные ресурсы, которые помогут вам перейти от вашей текущей профессии к фронтенд-разработчику. Получите углубленную оценку каждого ресурса и посмотрите, какие из них стоят вашего времени и усилий!"
        />
        <meta 
          name="author" 
          content="Алексей Овсянников" 
        />
      </Helmet>
      <BecameFrontDevRu/>
      <FooterRu/>
    </div>
  );
}

export default BecameFrontDevPageRu