import "../scss/_main.scss";
import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home";
import  Privacy from "../pages/Privacy";
import Blog from "../pages/blog/Blog";
import Header from "../components/header/Header";
import BecameFrontDev from "../pages/blog/articles/howIBecameFrontedDev/becameFrontDev";
import LucaDaCostaBook from "../pages/blog/articles/lucaDaCostaBook/lucaDaCostaBook";


const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
        <Router>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/privacy">
                        <Privacy />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/blog/lucaDaCostaBook">
                        <LucaDaCostaBook />
                    </Route>
                    <Route exact path="/blog/becameFrontDev">
                        <BecameFrontDev />
                    </Route>
                </Switch>
            </main>
        </Router>
    </div>
  );
}

export default App;
