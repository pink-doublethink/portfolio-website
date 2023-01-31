import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { BecameFrontDevRu, FooterRu } from "../../../components/ru"

const BecameFrontDevPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Мой путь к профессии фронтенд разработчика</title>
      </Helmet>
      <BecameFrontDevRu/>
      <FooterRu/>
    </div>
  );
}

export default BecameFrontDevPageRu