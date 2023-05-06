import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import styles from "./usingLayersInCSS.module.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UsingLayersInCSS = () => {
  const { theme } = useContext(ThemeContext);

  const ex1 = `
    @layer base {
      body {
        margin: 0;
        font-family: Arial, sans-serif;
      }
    
      h1, h2, h3 {
        font-weight: bold;
      }
    }
  `;


  const ex2 = `
    @layer theme {
      @layer dark {
        body {
          background-color: black;
          color: white;
        }

        a {
          color: cyan;
        }
      }

      @layer light {
        body {
          background-color: white;
          color: black;
        }

        a {
          color: blue;
        }
      }
    }
  `;

  const ex3 = `
    /* User agent stylesheet */
    body {
      margin: 8px;
    }
    
    /* Author stylesheet */
    @layer base {
      body {
        margin: 0;
      }
    }
    
    @layer theme {
      body {
        margin: 16px;
      }
    }
  `;

  const ex4 = `
    @layer theme {
      @layer dark {
        body {
          background-color: black;
          color: white;
        }
    
        a {
          color: cyan !important;
        }
      }
    
      @layer light {
        body {
          background-color: white;
          color: black;
        }
    
        a {
          color: blue !important;
        }
      }
    }
  `;
  return (
    <div className={styles[theme]}>
      <div className={styles.article}>
          <div className={styles.article__container}>
              <h1 className={styles.article__title}>
                Рецензия на книгу "Тестируем JavaScript"
              </h1>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are @layers?
                  </h3>
                  <p className={styles.article__paragraph}>
                    @layers are a new type of at-rule in CSS that define a layer of style rules. A layer can contain any CSS rules, such as selectors, properties, media queries, or other at-rules. For example, the following code defines a layer named “base” that contains some basic styles for the body and headings
                  </p>
                  <SyntaxHighlighter language="css" style={dark}>
                      {ex1}
                  </SyntaxHighlighter>
                  <p className={styles.article__paragraph}>
                    A layer can also contain other layers, creating a hierarchy of layers. For example, the following code defines a layer named “theme” that contains two sub-layers: “dark” and “light”. Each sub-layer defines a different color scheme for the page:
                  </p>
                  <SyntaxHighlighter language="css" style={dark}>
                      {ex2}
                  </SyntaxHighlighter>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    How do @layers work?
                  </h3>
                  <p className={styles.article__paragraph}>
                    @layers work by changing how the cascade and specificity of CSS rules are calculated. Normally, CSS rules are applied in the following order:
                  </p>
                  <p className={styles.article__paragraph}>
                    Origin: User agent stylesheets have the lowest priority, followed by user stylesheets, and then author stylesheets.
                    Importance: Rules marked with !important have higher priority than normal rules.
                    Specificity: Rules with more specific selectors have higher priority than rules with less specific selectors.
                  </p>
                  <p className={styles.article__paragraph}>
                    Order: Rules that appear later in the source code have higher priority than rules that appear earlier.
                    However, when using @layers, the order of layers also affects the priority of rules. Layers that are defined later have higher priority than layers that are defined earlier, regardless of their origin, importance, specificity, or order. For example, consider the following code:
                  </p>

                  <SyntaxHighlighter language="css" style={dark}>
                      {ex3}
                  </SyntaxHighlighter>

                  <p className={styles.article__paragraph}>
                    In this case, the rule body  margin: 16px;  from the “theme” layer will override the rule body  margin: 0;  from the “base” layer, even though they have the same specificity and origin. The rule body  margin: 8px;  from the user agent stylesheet will also be overridden by both layers.
                  </p>
                  <p className={styles.article__paragraph}>
                    However, within each layer, the normal cascade and specificity rules still apply. For example, consider the following code:
                  </p>

                  <SyntaxHighlighter language="css" style={dark}>
                      {ex4}
                  </SyntaxHighlighter>

                  <p className={styles.article__paragraph}>
                    In this case, both sub-layers have the same priority as they belong to the same parent layer. Therefore, the normal cascade and specificity rules will determine which rule wins. For example, if the media query @media (prefers-color-scheme: dark) matches, then the “dark” sub-layer will be applied and the links will be cyan. If the media query @media (prefers-color-scheme: light) matches, then the “light” sub-layer will be applied and the links will be blue.
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are the advantages of @layers?
                  </h3>
                  <p className={styles.article__paragraph}>
                    ◈ They provide a clear structure for grouping related style rules and separating them from unrelated ones.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They reduce the risk of unintended conflicts or overrides between different parts of the codebase or different authors.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They allow developers to control the cascade and specificity of rules more easily and explicitly.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They enable modular and reusable code that can be imported or exported across projects or components.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They facilitate responsive design and theming by allowing developers to switch between different layers based on media queries or user preferences.
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    What are the disadvantages of @layers?
                  </h3>
                  <p className={styles.article__paragraph}>
                    ◈ They introduce a new level of complexity and abstraction to CSS that may not be intuitive or familiar to some developers.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They require careful planning and naming of layers to avoid confusion or duplication.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They may not be compatible with some existing tools or frameworks that rely on the normal cascade and specificity rules.
                  </p>
                  <p className={styles.article__paragraph}>
                    ◈ They are not widely supported by browsers yet and may require polyfills or fallbacks for older browsers.
                  </p>
              </div>
              <div className={styles.article__box}>
                  <h3 className={styles.article__subtitle}>
                    Conclusion
                  </h3>
                  <p className={styles.article__paragraph}>
                    @layers are a new feature in CSS that allow developers to group style rules into logical units called layers and control how they interact with each other. They offer several benefits for organizing and maintaining CSS code but also some challenges for compatibility and adoption. If you are interested in trying out @layers in your projects, you can check out this polyfill or this postcss plugin that enable @layers support in most browsers.
                  </p>
                  <p className={`${styles.article__paragraph} ${styles.article__end}`}>
                    I hope you enjoyed this review of @layers in CSS. If you have any questions or feedback, please let me know in the comments below. 😊
                  </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default UsingLayersInCSS