import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";
import { BlogRu, FooterRu } from "../../components/ru"

const BlogPageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
        <meta
          name="description"
          content="В своем бложике я исследую захватывающий мир фронтенд разработки. В статьях  мы углубимся в последние тенденции CSS и исследуем экосистему React со всеми ее причудами и чудесами. Приготовьтесь к серьезному веселью, основанному на коде!"
        />
      </Helmet>
      <BlogRu />
      <FooterRu />
    </div>
  );
}

export default BlogPageRu