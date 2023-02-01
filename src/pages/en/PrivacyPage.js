import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../helpers/ThemeContext";
import { Privacy, Footer } from "../../components/en"

const PrivacyPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Terms of use</title>
      </Helmet>
      <Privacy/>
      <Footer/>
    </div>
  );
}

export default PrivacyPage