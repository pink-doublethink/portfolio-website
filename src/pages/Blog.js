import { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeContext";
import About from "../components/about/About"
import Experience from "../components/experience/Experience";
import Hero from "../components/hero/Hero";


const Blog = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Hero />
      <Experience />
      <About />
    </div>
  )
}

export default Blog