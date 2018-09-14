import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import theme from '../../theme';

export const footerHeight = 40;

// Note the footer is inverted coloring
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 ${theme.spaces.medium};
  color: ${theme.colors.background};
  background: ${theme.colors.textYellow};
  flex-shrink: 1;
  height: ${footerHeight}px;
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.small};
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-grow: 1;
  list-style: none;
`;

const FooterSocials = styled.div`
  font-size: 2em;
`;

const FooterLink = styled(Link)`
  color: #03282c;
  padding: 0 ${theme.spaces.medium};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    padding: 0 ${theme.spaces.small};
  }
`;

const FooterSocialLink = styled.a`
  color: #03282c;
  padding: 0 ${theme.spaces.micro};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterLinks>
      <FooterLink to="/about#coc">Code of Conduct</FooterLink>
      <FooterLink to="/about">Organizers</FooterLink>
    </FooterLinks>
    <FooterSocials>
      <FooterSocialLink
        aria-label="Instagram"
        href="https://www.instagram.com/jsconfhi"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </FooterSocialLink>
      <FooterSocialLink
        aria-label="Twitter"
        href="https://www.twitter.com/jsconfhi"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </FooterSocialLink>
      <FooterSocialLink
        aria-label="Facebook"
        href="https://www.facebook.com/JSConfHi"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </FooterSocialLink>
    </FooterSocials>
  </FooterWrapper>
);

export default Footer;
