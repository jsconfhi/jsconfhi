import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";
import theme from "../theme";

import Header, { headerHeight } from "../components/Header";
import Footer, { footerHeight } from "../components/Footer";
const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    background-color: ${theme.colors.background};
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
    box-sizing: border-box;
  }
  a { color: #038091; }
  p { line-height: 1.5em; margin: 1em 0;}
  li { list-style-type: disc; margin-left: 2em; margin-top: 0.5em; }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
}`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-top: ${headerHeight}px;
  padding-bottom: ${footerHeight}px;
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
              "A two day, single track conference dedicated to web development, JavaScript and building a community. February 7th + 8th 2019 in Honolulu, Hawaiʻi."
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
      </Helmet>
      <Wrapper>
        <Header style={{ flex: 1 }} />
        <MainContent>{children}</MainContent>
        <Footer style={{ flex: 1 }} />
      </Wrapper>
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
