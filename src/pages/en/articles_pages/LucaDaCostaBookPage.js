import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../../context/ThemeContext";
import { LucaDaCostaBook, Footer } from "../../../components/en"
import favicon from "../../../assets/icons/2.png"

const LucaDaCostaBookPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Testing JavaScript by Luca Da Costa: A Comprehensive Review</title>
        <meta
          name="description"
          content="Find out if Testing JavaScript by Luca Da Costa is the right book for you! Read review to discover if this book is perfect for beginners, advanced developers, or anyone in between. Get the inside scoop on what to expect before you buy."
        />
        <meta 
          name="author" 
          content="Alexei Ovsyannikov" 
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <LucaDaCostaBook/>
      <Footer/>
    </div>
  );
}

export default LucaDaCostaBookPage