import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import styles from "./opinionNestingInCSS.module.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';

const OpinionNestingInCSS = () => {
  const { theme } = useContext(ThemeContext);
  const css = "css";
  const ex1 = `.card {
    border: 1px solid gray;
    padding: 16px;
  }
      
  .card h2 {
    font-size: 24px;
  }
      
  .card p {
    font-size: 16px;
  }
      
  .card .button {
    background-color: blue;
    color: white;
  }`;


const ex2 = `.card {
  border: 1px solid gray;
  padding: 16px;
    
  h2 {
    font-size: 24px;
  }
    
  p {
    font-size: 16px;
  }
    
  .button {
    background-color: blue;
    color: white;
  }
}`;

const ex3 = `.foo {
  color: red;
    
  & .bar {
    color: green;
    
    & .baz {
      color: blue;
    }
  }
}`;

const ex4 = `.foo {
  color: red;
}
    
.foo .bar {
  color: green;
}
    
.foo .bar .baz {
  color: blue;
}`;

const ex5 = `.button {
  background-color: gray;
    
  &:hover {
    background-color: darkgray;
  }
    
  &--primary {
    background-color: blue;
    
    &:hover {
      background-color: darkblue;
    }
  }
}`;

const ex6 = `.button {
  background-color: gray;
}
    
.button:hover {
  background-color: darkgray;
}
    
.button--primary {
  background-color: blue;
}
    
.button--primary:hover {
  background-color: darkblue;
}`;

  return (
    <div className={styles[theme]}>
      <div className={styles.article}>
          <div className={styles.article__container}>
              <h1 className={styles.article__title}>
                CSS Nesting: A Simpler Way to Write Selectors
              </h1>
              <div className={styles.article__box}>
                  <p className={styles.article__paragraph}>
                    CSS is a powerful language for styling web pages, but it can also be verbose and repetitive. One of the common challenges that developers face is writing long and complex selectors that target specific elements or components. For example, consider the following code:
                  </p>
                  <div className={styles.codeContainers}>
                    <SyntaxHighlighter language="css" style={lucario}>
                      {ex1}
                    </SyntaxHighlighter>
                  </div>
                  <p className={styles.article__paragraph}>
                    This code defines some styles for a card component that contains a heading, a paragraph, and a button. However, to target each element inside the card, we have to repeat the .card class name in every selector. This can be tedious and error-prone, especially when working with nested components or multiple levels of specificity. 
                  </p>
                  <p className={styles.article__paragraph}>
                    To address this problem, a new feature has been proposed for CSS: nesting. This feature allows developers to write selectors inside other selectors, using the & symbol to refer to the parent selector. For example, the previous code can be rewritten as: 
                  </p>
                  <div className={styles.codeContainers}>
                    <SyntaxHighlighter language="css" style={lucario}>
                        {ex2}
                    </SyntaxHighlighter>
                  </div>
                  <p className={styles.article__paragraph}>
                    This code is much shorter and cleaner than the original one. It also makes it easier to see the structure and hierarchy of the component. 
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    How does CSS nesting work?
                  </h3>
                  <p className={styles.article__paragraph}>
                    CSS nesting works by transforming nested selectors into flat selectors at runtime. For example, the following code:
                  </p>
                  <div className={styles.codeContainers}>
                    <SyntaxHighlighter language="css" style={lucario}>
                        {ex3}
                    </SyntaxHighlighter>
                  </div>
                  <p className={styles.article__paragraph}>
                    will be transformed into:
                  </p>
                  <div className={styles.codeContainers}>
                    <SyntaxHighlighter language="css" style={lucario}>
                        {ex4}
                    </SyntaxHighlighter>
                  </div>
                  <p className={styles.article__paragraph}>
                    The & symbol can also be combined with other selectors or pseudo-classes to create more complex selectors. For example, the following code:
                  </p>
                  <div className={styles.codeContainers}>
                    <SyntaxHighlighter language="css" style={lucario}>
                        {ex5}
                    </SyntaxHighlighter>
                  </div>
                  <p className={styles.article__paragraph}>
                    will be transformed into:
                  </p>
                  <div className={styles.codeContainers}>
                    <SyntaxHighlighter language="css" style={lucario}>
                        {ex6}
                    </SyntaxHighlighter>
                  </div>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are the advantages of CSS nesting?
                  </h3>
                  <p className={styles.article__paragraph}>
                    ◈ It reduces the amount of code and repetition by allowing developers to write selectors in a more concise and hierarchical way;
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ It improves the readability and clarity of the code by showing the relationship and scope of selectors;
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ It enables modular and reusable code that can be imported or exported across projects or components;
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ It facilitates responsive design and theming by allowing developers to override or extend selectors based on media queries or user preferences;
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are the disadvantages of CSS nesting?
                  </h3>
                  <p className={styles.article__paragraph}>
                    ◈ It introduces a new syntax and convention to CSS that may not be intuitive or familiar to some developers;
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ It requires careful indentation and formatting of the code to avoid confusion or errors;
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈It may not be compatible with some existing tools or frameworks that rely on the normal selector syntax;
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈It is not widely supported by browsers yet and may require polyfills or fallbacks for older browsers; 
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    Conclusion
                  </h3>
                  <p className={styles.article__paragraph}>
                    CSS nesting is a new feature in CSS that allows developers to write selectors inside other selectors, using the & symbol to refer to the parent selector. It offers several benefits for writing and maintaining CSS code but also some challenges for compatibility and adoption. If you are interested in trying out CSS nesting in your projects, you can check out this polyfill or this postcss plugin that enable CSS nesting support in most browsers.
                  </p>
                  <p className={`${styles.article__paragraph} ${styles.article__end}`}>
                    I hope you enjoyed this review of CSS nesting. If you have any questions or feedback, please let me know in the comments below. 😊
                  </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default OpinionNestingInCSS