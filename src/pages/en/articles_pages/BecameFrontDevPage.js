import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { BecameFrontDev, Footer } from "../../../components/en"

const BecameFrontDevPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>From Real Estate to Client Interface Developer: My Journey and Must-Have Resources</title>
        <meta
          name="description"
          content="Discover valuable resources to help you transition from your current profession to front-end developer. Get an in-depth assessment of each resource and see which ones are worth your time and effort!"
        />
        <meta 
          name="author" 
          content="Alexei Ovsyannikov" 
        />
      </Helmet>
      <BecameFrontDev/>
      <Footer/>
    </div>
  );
}

export default BecameFrontDevPage