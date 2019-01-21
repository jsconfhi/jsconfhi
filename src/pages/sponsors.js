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
import MozillaLogo from "../img/mozilla.png";
import SudoKrewLogo from "../img/sudokrew.png";

const SponsorsContainer = styled.div`
  background-color: ${theme.colors.textWhite};
  display: flex;
  justify-content: space-around;
`;

const SponsorImage = styled.img`
  width: 100%;
  max-width: 450px;
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
    <Hero navTitle="Sponsors">
      <HeroLabel> Sponsorship Opportunities </HeroLabel>{" "}
      <Callout>
        <CalloutRail>
          <CalloutTitle> Join us as a Sponsor </CalloutTitle>{" "}
          <Button color="dark">
            <ContactLink
              href={withPrefix("/JS-Conf-Hawaii-2019-Sponsorship-Info.pdf")}
            >
              Learn more
            </ContactLink>
          </Button>
        </CalloutRail>
        <CalloutText>
          <p> Become a founding partner of JSConf Hawaiʻi! </p>
          <p>
            With over 300 developers from around the world attending, and
            hundreds more following along at home, sponsoring the conference is
            one of the best ways to connect with Javascript developers.
          </p>{" "}
          <p>
            There are a variety of sponsorship packages available for small and
            large companies alike! From setting up a developer lounge on-site,
            to hosting a meal, to reaching our eager Twitter audience, to being
            recognized as one of our "Diversity Sponsors" who help bring
            attendees to the conference, there's a huge range of benefits to
            take advantage of, and not all of them require you to attend
            in-person.
          </p>
          <p>
            For more information, and to explore the full range of options, to
            view our{" "}
            <a href={withPrefix("/JS-Conf-Hawaii-2019-Sponsorship-Info.pdf")}>
              prospectus
            </a>
            . And if you have a unique idea, we're excited to work with you to
            make your vision a reality, so please feel free to contact us for
            more information.{" "}
          </p>
        </CalloutText>
      </Callout>
    </Hero>
    <SponsorsContainer>
      <SponsorsBlock>
        <SponsorsBlockLabel>Sponsors</SponsorsBlockLabel>
        <SponsorsLabel>Gold</SponsorsLabel>
        <SponsorImage src={AdobeLogo} />
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
