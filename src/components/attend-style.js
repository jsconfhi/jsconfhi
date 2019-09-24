import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .grid-half-first {
    justify-self: start;
    grid-column-start: 1;
  }

  .grid-half-second {
    grid-column-end: 14;
  }

  .grid-full-about {
    grid-column-start: 1;
    grid-column-end: 14;
  }

  .center-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map {
    max-width: 100%;
  }

  h2 {
    margin-top: 1em;
  }

  h3 {
    font-weight: bold;
    line-height: 2.25em;
    margin-bottom: -1.25em;
  }

  h4 {
    font-weight: bold;
    line-height: 1.5em;
    margin-bottom: 0.5em;
  }

  .tito-wrapper {
    max-width: none;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.5em;
    }

    .content {
      padding: 1em;
    }

    .twitter-tweet {
        width: 100vw !important;
    }

  }
`;

export default GlobalStyles;