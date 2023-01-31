import "../scss/_main.scss";
import { useEffect, useState, lazy, Suspense, useContext, } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header, Spinner} from "../components/en";
import {HeaderRu} from "../components/ru";

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

const Page404 = lazy(() => import('../pages/404/Page404'));


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
  
  return (
    <div className={theme}>
        <Router>
        {language === "en" ? (<Header/>) : (<HeaderRu/>)}
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route exact path={`/`} element={language === "en" ? (<HomePage/>) : (<HomePageRu/>)}/>
                        <Route exact path={`/${language}`} element={language === "en" ? (<HomePage/>) : (<HomePageRu/>)}/>
                        <Route exact path={`/${language}/privacy`} element={language === "en" ? (<PrivacyPage/>) : (<PrivacyPageRu/>)}/>
                        <Route exact path={`/${language}/blog`} element={language === "en" ? (<BlogPage/>) : (<BlogPageRu/>)}/>
                        <Route exact path={`/${language}/blog/lucaDaCostaBook`} element={language === "en" ? (<LucaDaCostaBookPage/>) : (<LucaDaCostaBookPageRu/>)}/>
                        <Route exact path={`/${language}/blog/becameFrontDev`} element={language === "en" ? (<BecameFrontDevPage/>) : (<BecameFrontDevPageRu/>)}/>
                        <Route exact path="*" element={<Page404/>}/>
                    </Routes>
                </Suspense>
            </main>
        </Router>
    </div>
  );
}

export default App;