import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../helpers/ThemeContext";
import { ErrorMessageRu, FooterRu} from "../../components/ru"

const ErrorPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Cтраница не найдена!</title>
      </Helmet>
      <ErrorMessageRu />
      <FooterRu />
    </div>
  );
}

export default ErrorPageRu