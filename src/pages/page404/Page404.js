import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import {Link} from 'react-router-dom';
import styles from "./page404.module.scss";

const Page404 = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles[theme]}>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;