import "../scss/_main.scss";
import { lazy, Suspense, useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header, Spinner} from "../components";

const Home = lazy(() => import('../pages/Home'));
const Privacy = lazy(() => import('../pages/privacy/Privacy'));
const Blog = lazy(() => import('../pages/blog/Blog'));
const BecameFrontDev = lazy(() => import('../pages/blog/articles/howIBecameFrontedDev/becameFrontDev'));
const LucaDaCostaBook = lazy(() => import('../pages/blog/articles/lucaDaCostaBook/lucaDaCostaBook'));
const Page404 = lazy(() => import('../pages/page404/Page404'));


const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
        <Router>
            <Header/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/privacy">
                            <Privacy/>
                        </Route>
                        <Route exact path="/blog">
                            <Blog/>
                        </Route>
                        <Route exact path="/blog/lucaDaCostaBook">
                            <LucaDaCostaBook/>
                        </Route>
                        <Route exact path="/blog/becameFrontDev">
                            <BecameFrontDev/>
                        </Route>
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </Router>
    </div>
  );
}

export default App;
