import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";

const PrivacyPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
      </Helmet>
    </div>
  );
}

export default PrivacyPageRu