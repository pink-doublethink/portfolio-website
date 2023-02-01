import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { LucaDaCostaBook, Footer } from "../../../components/en"

const LucaDaCostaBookPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Review of the book "Testing Javascript" </title>
      </Helmet>
      <LucaDaCostaBook/>
      <Footer/>
    </div>
  );
}

export default LucaDaCostaBookPage