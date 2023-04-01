import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";
import { PrivacyRu, FooterRu } from "../../components/ru"

const PrivacyPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
      </Helmet>
      <PrivacyRu/>
      <FooterRu />
    </div>
  );
}

export default PrivacyPageRu