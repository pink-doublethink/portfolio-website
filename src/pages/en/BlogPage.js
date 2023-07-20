import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";
import { Blog, Footer } from "../../components/en"
import favicon from "../../assets/icons/2.png"

const BlogPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Articles - Alexei Ovsyannikov</title>
        <meta
          name="description"
          content="In my blog, I explore the exciting world of front-end development. In the articles, we'll delve into the latest CSS trends and explore the React ecosystem with all its quirks and wonders. Get ready for some serious code-based fun!"
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default BlogPage