import "../scss/_main.scss";
import { useEffect, useState, lazy, Suspense, useContext, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header, Spinner} from "../components/en";
import {HeaderRu} from "../components/ru";
import ErrorPage from "../pages/en/ErrorPage";
import ScrollToTopOnPageChange from "../utils/ScrollToTopOnPageChange";
import Analytics from "../utils/Analytics";


const HomePage = lazy(() => import('../pages/en/HomePage'));
const BlogPage = lazy(() => import('../pages/en/BlogPage'));
const AboutPage = lazy(() => import('../pages/en/AboutPage'));

const BecameFrontDevPage = lazy(() => import('../pages/en/articles_pages/BecameFrontDevPage'));
const LucaDaCostaBookPage = lazy(() => import('../pages/en/articles_pages/LucaDaCostaBookPage'));
const OpinionNestingInCSSPage = lazy(() => import('../pages/en/articles_pages/OpinionNestingInCSSPage'));

const HomePageRu = lazy(() => import('../pages/ru/HomePageRu'));
const BlogPageRu = lazy(() => import('../pages/ru/BlogPageRu'));
const AboutPageRu = lazy(() => import('../pages/ru/AboutPageRu'));


const BecameFrontDevPageRu = lazy(() => import('../pages/ru/articles_pages/BecameFrontDevPageRu'));
const LucaDaCostaBookPageRu = lazy(() => import('../pages/ru/articles_pages/LucaDaCostaBookPageRu'));
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

  return (
    <div className={theme}>
        <Router>
          <ScrollToTopOnPageChange />
          <Analytics />
          {Head}
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path={`/`} element={Home}/>
                        
                        <Route path='/en' element={<HomePage />} />
                        <Route path='/en/about' element={<AboutPage />} />
                        <Route path='/en/blog' element={<BlogPage />} />
                        <Route path='/en/blog/becameFrontDev' element={<BecameFrontDevPage />} />
                        <Route path='/en/blog/lucaDaCostaBook' element={<LucaDaCostaBookPage />} />
                        <Route path='/en/blog/opinionNestingInCSS' element={<OpinionNestingInCSSPage />} />
                        
                        <Route path='/ru' element={<HomePageRu />} />
                        <Route path='/ru/about' element={<AboutPageRu/>} />
                        <Route path='/ru/blog' element={<BlogPageRu />} />
                        <Route path='/ru/blog/becameFrontDev' element={<BecameFrontDevPageRu />} />
                        <Route path='/ru/blog/lucaDaCostaBook' element={<LucaDaCostaBookPageRu />} />
                        <Route path='/ru/blog/opinionNestingInCSS' element={<OpinionNestingInCSSPageRu />} />

                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </main>
        </Router>
    </div>
  );
}

export default App;