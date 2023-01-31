import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../helpers/ThemeContext";
import { Blog, Footer } from "../../components/en"

const BlogPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Articles - Alexei Ovsyannikov</title>
      </Helmet>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default BlogPage