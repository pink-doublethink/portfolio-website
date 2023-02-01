import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../helpers/ThemeContext";
import { ErrorMessage, Footer} from "../../components/en"

const ErrorPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <ErrorMessage/>
      <Footer/>
    </div>
  );
}

export default ErrorPage