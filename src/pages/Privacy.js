import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import Policy from "../components/policy/Policy";

const Privacy = () =>  {
  const { theme } = useContext(ThemeContext);

  return (
    <div lassName={theme}>
        <Policy />
    </div>
  )
}

export default Privacy