import "../scss/_main.scss";
import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home";
import  Privacy from "../pages/Privacy";
import Blog from "../pages/Blog";
import Header from "../components/header/Header";

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
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/privacy">
                        <Privacy />
                    </Route>
                </Switch>
            </main>
        </Router>
    </div>
  );
}

export default App;
