import Button from "../components/Button";
import Hero from "../components/Hero";
import HeroLabel from "../components/Hero/contentLabel";
import React from "react";
import { withPrefix } from "gatsby-link";
import Layout from "../components/layout";
import styled from "styled-components";
import theme from "../theme";

import AdobeLogo from "../img/adobe.png";
import GoogleLogo from "../img/google.png";
import MicrosoftLogo from "../img/microsoft.png";
import MozillaLogo from "../img/mozilla.png";
import SudoKrewLogo from "../img/sudokrew.png";

const SponsorsContainer = styled.div`
  background-color: ${theme.colors.textWhite};
  display: flex;
  justify-content: space-around;
`;

const SponsorImage = styled.img`
  width: 100%;
  max-width: 250px;
  display: block;
  margin: 0 auto 50px auto;
`;

const AdobeImage = styled.img`
  width: 100%;
  max-width: 200px;
  display: block;
  margin: 0 auto 50px auto;
`;

const SponsorsBlock = styled.div`
  color: ${theme.colors.textYellow};
  width: ${theme.containerWidth};
  max-width: 100%;
  margin: ${theme.spaces.large};
`;

const SponsorsBlockLabel = styled.h1`
  color: ${theme.colors.textYellow};
  font-size: ${theme.fontSizes.large};
  margin-bottom: ${theme.spaces.large};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const SponsorsLabel = styled.h2`
  color: ${theme.colors.textGray};
  font-size: ${theme.fontSizes.large};
  margin-bottom: ${theme.spaces.large};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const Callout = styled.div`
  background-color: white;
  display: flex;
  max-width: ${theme.containerWidth};
  padding: ${theme.spaces.medium};
  width: 100%;
  @media (max-width: ${theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

const CalloutTitle = styled.div`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  color: ${theme.colors.background};
`;

const ContactBlock = styled.div`
  background-color: ${theme.colors.gray};
  flex-grow: 1;
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  padding: ${theme.spaces.large};
  text-align: center;
`;

const CalloutRail = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  margin-right: ${theme.spaces.large};
  @media (max-width: ${theme.breakpoints.medium}) {
    flex-basis: auto;
  }
`;

const CalloutText = styled.div`
  flex-basis: 0;
  flex-grow: 3;
  flex-shrink: 1;
`;

const ContactLink = styled.a`
  color: ${theme.colors.background};
  text-decoration: none;
`;

const Sponsors = () => (
  <Layout>
    <Hero navTitle="Sponsors" />
    <SponsorsContainer>
      <SponsorsBlock>
        <SponsorsLabel>Gold</SponsorsLabel>
        <AdobeImage src={AdobeLogo} />
        <SponsorImage src={MicrosoftLogo} />
        <SponsorsLabel>Diversity</SponsorsLabel>
        <SponsorImage src={GoogleLogo} />
        <SponsorsLabel>Caption</SponsorsLabel>
        <SponsorImage src={MozillaLogo} />
        <SponsorsLabel>Bronze</SponsorsLabel>
        <SponsorImage src={SudoKrewLogo} />
      </SponsorsBlock>
    </SponsorsContainer>
    <ContactBlock>
      <h2
        style={{
          color: theme.colors.background
        }}
      >
        Contact Us
      </h2>
      <p>
        <ContactLink href="mailto:sponsor@jsconfhi.com">
          sponsor @jsconfhi.com
        </ContactLink>
      </p>
    </ContactBlock>
  </Layout>
);

export default Sponsors;
