import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { LucaDaCostaBookRu, FooterRu } from "../../../components/ru"

const LucaDaCostaBookPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
      </Helmet>
      <LucaDaCostaBookRu/>
      <FooterRu/>
    </div>
  );
}

export default LucaDaCostaBookPageRu