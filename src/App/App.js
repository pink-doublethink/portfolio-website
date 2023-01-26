import "../scss/_main.scss";
import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from "../components";
import {Home, Privacy, Page404, Blog, BecameFrontDev, LucaDaCostaBook} from "../pages";



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
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </main>
        </Router>
    </div>
  );
}

export default App;
