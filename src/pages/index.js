import Button from '../components/Button';
import FontAwesomeIcon from '../components/FontAwesomeIcon';
import {
  faFacebook,
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Columns, { Column } from '../components/Columns';
import styled from 'styled-components';
import theme from '../theme';

const H2 = styled.h2`
  color: ${theme.colors.textWhite};
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${theme.spaces.small} 0;
  text-transform: uppercase;
`;

const HeroContent = styled.div`
  align-self: center;
  background-color: ${theme.colors.background90};
  color: ${theme.colors.textYellow};
  max-width: 800px;
  margin: ${theme.spaces.xLarge} 0;
  padding: ${theme.spaces.large} 6rem;
  @media (max-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spaces.large};
  }
}
`;

// Sized to exactly fit
const DatesAndSocials = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${theme.spaces.medium} 0;
  border-top: 1px dashed ${theme.colors.textYellow};
  border-bottom: 1px dashed ${theme.colors.textYellow};
  text-transform: uppercase;
  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
`;

const DatesAndSocialsItem = styled.div`
  margin: ${theme.spaces.medium} 0;
  flex: 1;
  text-align: center;
  padding: 0 ${theme.spaces.small};
  & + & {
    border-left: 1px solid ${theme.colors.textYellow};
  }
  @media (max-width: ${theme.breakpoints.small}) {
    margin: ${theme.spaces.small} 0;
    padding: 0;
    & + & {
      border-left: none;
    }
  }
`;

const SocialLink = styled.a`
  color: ${theme.colors.textYellow};
  margin: 0 ${theme.spaces.micro};
`;

const Sup = styled.sup`
  vertical-align: super;
  font-size: 0.6em;
`;

const IndexPage = () => (
  <Layout>
    <Hero style={{ flexGrow: 1 }}>
      <HeroContent>
        <div
          style={{
            fontSize: theme.fontSizes.large,
            marginBottom: theme.spaces.xSmall,
            textTransform: 'uppercase'
          }}
        >
          Announcing
        </div>
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          JSConf Hawaiʻi
        </h3>
        <DatesAndSocials>
          <DatesAndSocialsItem>
            Feb 7<Sup>th</Sup> + 8<Sup>th</Sup> 2019
          </DatesAndSocialsItem>
          <DatesAndSocialsItem>Honolulu, HI</DatesAndSocialsItem>
          <DatesAndSocialsItem style={{ flexShrink: 0 }}>
            <SocialLink
              aria-label="Instagram"
              href="https://www.instagram.com/jsconfhi"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
            <SocialLink
              aria-label="Twitter"
              href="https://www.twitter.com/jsconfhi"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </SocialLink>
            <SocialLink
              aria-label="Facebook"
              href="https://www.facebook.com/JSConfHi"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </SocialLink>
          </DatesAndSocialsItem>
        </DatesAndSocials>
        <p>
          Our mission: Provide a fun, unique and welcoming environment where
          diversity thrives and attendees can come together to discuss
          JavaScript as a technology and grow it as a community.
        </p>
        <Button isPrimary style={{ gridArea: 'tickets' }} to="/attend/">
          Learn more
        </Button>
      </HeroContent>
    </Hero>
    <Columns>
      <Column>
        <H2>Speakers</H2>
        <p>We've started to select our incredible lineup of speakers!</p>
        <p>
          There's something for everyone! From intro talks and deep dives to
          cool projects and new ways to think about how we interact with the
          communities around us, you won't want to miss hearing from any of our
          awesome speakers from around the globe.
        </p>
        <Button to="/call-for-speakers">Learn More</Button>
      </Column>
      <Column>
        <H2>Sponsorships</H2>
        <p>
          We are currently offering sponsorship packages for the inauguaral
          JSConf Hawaiʻi coming February 2019. We’re looking forward to working
          with our sponsors to find the best way to connect each of you with our
          attendees in unique and meaningful ways.
        </p>
        <Button to="/sponsors">Learn More</Button>
      </Column>
    </Columns>
  </Layout>
);

export default IndexPage;
