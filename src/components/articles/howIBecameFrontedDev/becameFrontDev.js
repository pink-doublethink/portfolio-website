import { useContext } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import styles from "./becameFrontDev.module.scss";

function becameFrontDev() {
    const { theme } = useContext(ThemeContext);
  return (
    <div className={styles[theme]}>
        
    </div>
  )
}

export default becameFrontDev