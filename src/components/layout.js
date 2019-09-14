import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: Geneva, Verdana, sans-serif;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  p {
    line-height: 1.4em;
    margin-bottom: 1.4em;
  }

  strong {
    font-weight: bold;
  }

  i {
    font-style: italic;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3 {
    font-family: Arial Black, Geneva, Verdana, sans-serif;
    font-weight: bold;
    padding-bottom: 12px;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.4em;
  }

  input {
    padding: 3px 8px;
  }

  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    min-height: 100vh;
  }
`;

const TemplateWrapper = ({ children }) => (
  <>
    <GlobalStyles />
    <div>
      <Helmet
        title="JSConf Hawaiʻi"
        meta={[
          {
            name: "description",
            content:
              "A three day, single track conference dedicated to web development, JavaScript and building a community. February 5th-7th in Honolulu, Hawaiʻi."
          },
          {
            name: "keywords",
            content: "JS, JavaScript, Conference, Hawaii, Tech, Web"
          },
          { name: "theme-color", content: "#03282c" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:site", content: "@JSConfHi" },
          { name: "og:title", content: "JSConf Hawaiʻi" },
          {
            name: "og:description",
            content:
              "A two day, single track conference dedicated to web development, JavaScript and building a community. February 7th + 8th 2019 in Honolulu, Hawaiʻi."
          },
          {
            name: "og:image",
            content: "https://www.jsconfhi.com/android-chrome-512x512.png"
          }
        ]}
      >
        <html lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://css.tito.io/v1.1"
        />
        <script src="https://js.tito.io/v1" async />
      </Helmet>
      <div>{children}</div>
    </div>
  </>
);

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default TemplateWrapper;
