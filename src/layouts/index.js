import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";

import Header from "../components/Header";

injectGlobal`
  ${reset}
  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
