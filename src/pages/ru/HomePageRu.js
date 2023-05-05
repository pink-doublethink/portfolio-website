import { useContext } from "react";
import {Helmet} from "react-helmet";
import { ThemeContext } from "../../context/ThemeContext";
import {HeroRu, PortfolioRu, FooterRu} from "../../components/ru"

const HomePageRu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Helmet>
        <title>Алексей Овсянников - фронтенд разработчик из Москвы</title>
        <meta
          name="description"
          content="Фронтенд разработчик с опытом работы на React / Next.js / TypeScript. Работая над проектами я заинтересован создавать Продукты, расширяющие возможности людей."
        />
      </Helmet>
      <HeroRu />
      <PortfolioRu />
      <FooterRu />
    </div>
  );
}

export default HomePageRu