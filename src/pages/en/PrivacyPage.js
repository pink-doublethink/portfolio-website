import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";

const PrivacyPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Terms of use</title>
      </Helmet>
    </div>
  );
}

export default PrivacyPage