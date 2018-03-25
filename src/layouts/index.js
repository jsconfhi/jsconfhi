import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import styled from 'styled-components';

import Header from "../components/Header";
import Footer from "../components/Footer";
injectGlobal`
  ${reset}
  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    font-size: 18px;
  }
  a { color: #038091; }
  p { line-height: 2em; margin: 1em 0;}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
}`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "JS Conf Hawaii" },
        { name: "keywords", content: "JS, JavaScript, Conference, Hawaii, Tech" }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Wrapper>
      <Header style={{ flex: 1 }}/>
      <div style={{ flex: 1, flexGrow: 1}}>
        {children()}
      </div>
      <Footer style={{ flex: 1 }}/>
    </Wrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
