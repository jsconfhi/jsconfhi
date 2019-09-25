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
    padding-bottom: 30px;
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

  .home {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 36px;
    margin-right: 1.5em;
  }

  .main-content {
    background-color: #F2DC1A;
  }

  .button-primary {
    background: #F2DC1A;
    color: black;
  }

  .button-secondary {
    background: #1A7173;
    color: #fff;
  }

  .button-tweet {
    background: #1da1f2;
    color: #fff;
  }

  .button-primary, .button-secondary, button-tweet {
    border-radius: 18px;
    padding: 6px 12px;
  }

  .hero {
    position: relative;
    margin: 0 0 -100px;
  }

  .about {
    padding-top: 65px;
    background: #1A7173;
    color: white;
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
    display: flex;
    flex-direction: column;
  }

  .about a {
    color: white;
    text-decoration: underline;
  }

  .newsletter {
    background: #D95B5B;
    color: white;
    text-align: center;
  }

  .speakers {
    position: relative;
    background: #F2DC1A;
    text-align: center;
    min-height: 325px;
  }

  .coc {
    position: relative;
    background: #831D1D;
    color: #fff;
  }

  .coc .heading {
    font-size: 2em;
    text-align: right;
  }

  .section {
    padding: 4em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 300px;
  }

  .section-top {
    min-height: 400px;
  }

  .heading {
    text-transform: uppercase;
  }

  .subheading {
    text-transform: none;
  }

  .nav-top, .nav-bottom {
    padding: 1.5em 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hidden {
    display: none;
  }

  .content {
    display: flex;
    justify-content: space-around;
  }

  .footer {
    background: #02292E;
  }

  .footer a {
    font-size: 0.9em;
    color: #fff;
  }

  .footer .icon {
    font-size: 1.4em;
  }

  .nav {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .nav-top a {
    color:#000;
  }

  a:hover, a:active {
    text-decoration: underline;
  }

  .nav-social 
  .nav-contact {
    flex: 1;
  }

  .nav-social {
    align-self: flex-end;
  }

  .nav-left, 
  .nav-right,
  .nav-right-expandable {
    display: flex;
  }

  .nav-right-expandable {
    background: #02292E;
    flex-direction: column;
    align-items: center;
    line-height: 2em;
    padding: 1em;
  }

  .nav-right-expandable li {
    padding: 0.3em 0;
  }

  .nav-right-expandable a {
    color: white;
  }

  .nav-right-expandable a.button-primary {
    color: black;
  }

  .nav-left li {
    padding-right: 1em;
  }

  .nav-right li {
    padding-left: 1em;
  }

  .nav-hamburger, .buy-button-mobile {
    display: none;
    font-size: 1.5em;
  }

  .hamburger-icon {
    border: none;
    padding: 0;
    margin: 0;
    font-size: 24px;
    background-color: transparent;
  }

  .newsletter .description button {
    align-self: flex-start;
    border: 0;
    border-radius: 18px;
    padding: 6px 12px;
    margin: 0 10px;
    font-size: 100%;
    background: #1A7173;
    color: #fff;
  }

  .newsletter .description button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .newsletter .description input {
    border: 0;
    margin: 0 0.5em 0.5em 0;
    padding: 3px 8px;
  }

  a.buy-button-mobile {
    color: black;
    font-size: 1em;
    text-decoration: none;
  }

  a.buy-button-mobile:active, 
  a.buy-button-mobile:hover {
    text-decoration: underline;
  }

  .code-of-conduct ul, .info ul {
    line-height: 1.5em;
    list-style: circle;
    padding: 0 0 1em 1.5em;
  }

  .code-of-conduct p + ul, .info p + ul { 
    margin-top: -1em;
  }

  .page-sponsors .content {
    padding: 0em;
  }

  .page-sponsors .footer {
    margin-top: 2em;
  }

  /*----- SVG Art -----*/

  .aloha, .flipflops, .towel {
    position: absolute;
  }

  .aloha {
    width: 50%;
    max-width: 800px;
    z-index: 1;
  }

  .towel {
    width: 12%;
    max-width: 220px;
    -webkit-box-shadow: -7px 5px 11px -1px #545454;
    box-shadow: -7px 5px 11px -1px 545454;
  }

  .towel-green {
    right: 5%;
    bottom: 18%;
    transform: rotate(-6deg);
  }

  .towel-red {
    right: 18%;
    bottom: -20%;
    transform: rotate(-6deg);
  }

  .flipflops {
    width: 20%;
    max-width: 400px;
    top: -50%;
    left: 5%;
    transform: rotate(24deg);
  }

  /*----- Grid layout -----*/
  .grid {
    display: grid;
    grid-template-columns: 1fr repeat(12,minmax(1rem,3.75rem)) 1fr;
    -ms-grid-columns: 1fr repeat(12,minmax(1rem,3.75rem)) 1fr;
    grid-gap: .25rem;
  }

  .grid-full {
    grid-column: 2/span 12;
  }

  .grid-two-thirds {
    grid-column: 2/span 8;
  }

  .grid-half-first {
    grid-column-start: 1;
    grid-column-end: 8;
    padding-right: 1em;
    justify-self: end;
  }

  .grid-half-second {
    grid-column-start: 8;
    grid-column-end: 13;
  }

  /*----- Mailchimp signup -----*/
  .signup-form {
    margin-top: 1em;
    display: flex;
    justify-content: center;
  }

  .mc-field-group {
    display: inline-block;
  }

  .signup-form .email {
    margin: 0 0.5em 0.5em 0;
  }

  .signup-form .button-secondary {
    align-self: flex-start;
  }

  /*----- Media queries -----*/
  @media screen and (max-width: 1200px){
    .towel-green {
      bottom: 12%;
    }

    .towel-red {
      bottom: -12%;
    }

    .flipflops {
      left: 0%;
    }

    .coc .heading {
      font-size: 1.5em;
    }

    .about {
      clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
    }
  }

  @media screen and (max-width: 750px){
    .towel, .flipflops {
      display: none;
    }

    .home-text {
      display: none;
    }

    .grid-two-thirds {
      grid-column: 2/span 12;
    }
  }

  @media screen and (min-width: 600px) {
    .nav-right-expandable {
      display: none;
    }
  }

  @media screen and (max-width: 600px){
    .towel, .flipflops, .nav-right {
      display: none;
    }

    .nav-hamburger, .buy-button-mobile {
      display: initial;
    }

    .nav-left {
      width: 100%;
      justify-content: space-between;
    }

    .nav-left li {
      padding-right: 0;
    }

    .grid-half-first, 
    .grid-half-second {
      justify-self: flex-start;
      grid-column: 2/span 12;
    }

    .hero {
      min-height: 120px;
      margin: 0;
    }

  .section, .coc .heading  {
      align-items: flex-start;
      text-align: left;
    }

    .signup-form {
      display: flex;
      flex-direction: column;
    }

    .signup-form .email {
      width: 100%;
    }

    .button-secondary {
      display: block;
      text-align: center;
      width: 100%;
    }
    
    .about {
      clip-path: initial;
    }
  }

  @media (min-width: 40rem) {
    .grid {
      grid-template-columns: 1rem repeat(12,minmax(1rem,3.75rem)) 1rem;
      -ms-grid-columns: 1rem repeat(12,minmax(1rem,3.75rem)) 1rem;
      grid-gap: 1.25rem
    }
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
