import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { BecameFrontDev, Footer } from "../../../components/en"

const BecameFrontDevPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>My path to becoming a Front-end Developer</title>
      </Helmet>
      <BecameFrontDev/>
      <Footer/>
    </div>
  );
}

export default BecameFrontDevPage