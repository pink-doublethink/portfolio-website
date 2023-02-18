import "../scss/_main.scss";
import { useEffect, useState, lazy, Suspense, useContext, } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header, Spinner} from "../components/en";
import {HeaderRu} from "../components/ru";
import ErrorPage from "../pages/en/ErrorPage";
import ErrorPageRu from "../pages/ru/ErrorPageRu";

const HomePage = lazy(() => import('../pages/en/HomePage'));
const PrivacyPage = lazy(() => import('../pages/en/PrivacyPage'));
const BlogPage = lazy(() => import('../pages/en/BlogPage'));

const BecameFrontDevPage = lazy(() => import('../pages/en/articles_pages/BecameFrontDevPage'));
const LucaDaCostaBookPage = lazy(() => import('../pages/en/articles_pages/LucaDaCostaBookPage'));

const HomePageRu = lazy(() => import('../pages/ru/HomePageRu'));
const PrivacyPageRu = lazy(() => import('../pages/ru/PrivacyPageRu'));
const BlogPageRu = lazy(() => import('../pages/ru/BlogPageRu'));

const BecameFrontDevPageRu = lazy(() => import('../pages/ru/articles_pages/BecameFrontDevPageRu'));
const LucaDaCostaBookPageRu = lazy(() => import('../pages/ru/articles_pages/LucaDaCostaBookPageRu'));



const App = () => {
  const { theme } = useContext(ThemeContext);
  const [language, setLanguage] = useState("en");
  
  
  useEffect(() => {
    const platformLanguage =
      window.navigator &&
      (window.navigator.language ||
        window.navigator.browserLanguage ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage ||
        null);
    if (platformLanguage && platformLanguage.match("ru")) {
      setLanguage("ru");
    }
  }, []);

  const Head = language === "en" ? (<Header/>) : (<HeaderRu/>);
  const Home = language === "en" ? (<HomePage/>) : (<HomePageRu/>);
  const Privacy = language === "en" ? (<PrivacyPage/>) : (<PrivacyPageRu/>)
  const Blog = language === "en" ? (<BlogPage/>) : (<BlogPageRu/>);
  const Error = language === "en" ? (<ErrorPage/>) : (<ErrorPageRu/>);

  const BecameFrontDev = language === "en" ? (<BecameFrontDevPage/>) : (<BecameFrontDevPageRu/>);
  const LucaDaCostaBook = language === "en" ? (<LucaDaCostaBookPage/>) : (<LucaDaCostaBookPageRu/>);

  return (
    <div className={theme}>
        <Router>
        {Head}
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route exact path={`/`} element={Home}/>
                        <Route path="*" element={<ErrorPage/>}/>
                        <Route exact path={`/${language}`} element={Home}/>
                        <Route exact path={`/${language}/privacy`} element={Privacy}/>
                        <Route exact path={`/${language}/blog`} element={Blog}/>
                        <Route exact path={`/${language}/blog/becameFrontDev`} element={BecameFrontDev}/>
                        <Route exact path={`/${language}/blog/lucaDaCostaBook`} element={LucaDaCostaBook}/>
                    </Routes>
                </Suspense>
            </main>
        </Router>
    </div>
  );
}

export default App;