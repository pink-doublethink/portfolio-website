import "../scss/_main.scss";
import { useEffect, useState, lazy, Suspense, useContext, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header, Spinner} from "../components/en";
import {HeaderRu} from "../components/ru";
import ErrorPage from "../pages/en/ErrorPage";
import ErrorPageRu from "../pages/ru/ErrorPageRu";
import ScrollToTopOnPageChange from "../utils/ScrollToTopOnPageChange";

const HomePage = lazy(() => import('../pages/en/HomePage'));
const PrivacyPage = lazy(() => import('../pages/en/PrivacyPage'));
const BlogPage = lazy(() => import('../pages/en/BlogPage'));
const AboutPage = lazy(() => import('../pages/en/AboutPage'));

const BecameFrontDevPage = lazy(() => import('../pages/en/articles_pages/BecameFrontDevPage'));
const LucaDaCostaBookPage = lazy(() => import('../pages/en/articles_pages/LucaDaCostaBookPage'));
const UsingLayersInCSSPage = lazy(() => import('../pages/en/articles_pages/UsingLayersInCSSPage'));
const OpinionNestingInCSSPage = lazy(() => import('../pages/en/articles_pages/OpinionNestingInCSSPage'));

const HomePageRu = lazy(() => import('../pages/ru/HomePageRu'));
const PrivacyPageRu = lazy(() => import('../pages/ru/PrivacyPageRu'));
const BlogPageRu = lazy(() => import('../pages/ru/BlogPageRu'));
const AboutPageRu = lazy(() => import('../pages/ru/AboutPageRu'));


const BecameFrontDevPageRu = lazy(() => import('../pages/ru/articles_pages/BecameFrontDevPageRu'));
const LucaDaCostaBookPageRu = lazy(() => import('../pages/ru/articles_pages/LucaDaCostaBookPageRu'));
const UsingLayersInCSSPageRu = lazy(() => import('../pages/ru/articles_pages/UsingLayersInCSSPageRu'));
const OpinionNestingInCSSPageRu = lazy(() => import('../pages/ru/articles_pages/OpinionNestingInCSSPageRu'));

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [language, setLanguage] = useState("en");

  const createEffectFn = (setLanguage) => {
    return () => {
      const platformLanguage =
        window.navigator &&
        (window.navigator.language ||
          window.navigator.browserLanguage ||
          window.navigator.userLanguage ||
          null);
      if (platformLanguage && platformLanguage.match("ru")) {
        setLanguage("ru");
      }
    };
  };

  const effectFn = useMemo(() => createEffectFn(setLanguage), [setLanguage]);

  useEffect(effectFn, []);

  const Head = language === "en" ? (<Header/>) : (<HeaderRu/>);
  const Home = language === "en" ? (<HomePage/>) : (<HomePageRu/>);
  // const Privacy = language === "en" ? (<PrivacyPage/>) : (<PrivacyPageRu/>)
  const Blog = language === "en" ? (<BlogPage/>) : (<BlogPageRu/>);
  const About = language === "en" ? (<AboutPage/>) : (<AboutPageRu/>);
  const Error = language === "en" ? (<ErrorPage/>) : (<ErrorPageRu/>);

  const OpinionNestingInCSS = language === "en" ? (<OpinionNestingInCSSPage/>) : (<OpinionNestingInCSSPageRu/>);
  const UsingLayersInCSS = language === "en" ? (<UsingLayersInCSSPage/>) : (<UsingLayersInCSSPageRu/>);
  const BecameFrontDev = language === "en" ? (<BecameFrontDevPage/>) : (<BecameFrontDevPageRu/>);
  const LucaDaCostaBook = language === "en" ? (<LucaDaCostaBookPage/>) : (<LucaDaCostaBookPageRu/>);

  return (
    <div className={theme}>
        <Router>
          <ScrollToTopOnPageChange />
          {Head}
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path={`/`} element={Home}/>
                        <Route path={`/${language}`} element={Home}/>
                        <Route path={`/${language}/about`} element={About}/>
                        <Route path={`/${language}/blog`} element={Blog}/>
                        <Route path={`/${language}/blog/becameFrontDev`} element={BecameFrontDev}/>
                        <Route path={`/${language}/blog/lucaDaCostaBook`} element={LucaDaCostaBook}/>
                        <Route path={`/${language}/blog/usingLayersInCSS`} element={UsingLayersInCSS}/>
                        <Route path={`/${language}/blog/opinionNestingInCSS`} element={OpinionNestingInCSS}/>
                        <Route path={`*`} element={Error}/>
                    </Routes>
                </Suspense>
            </main>
        </Router>
    </div>
  );
}

export default App;