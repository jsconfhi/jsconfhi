import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from "styled-components";
import twitterLogo from '../../img/twitter-logo.png'

const FooterWrapper = styled.div`
  width: 100%;
  background: #00bcd4;
  height: 70px;
  margin-top: 2em;
`;

const FooterContent = styled.ul`
  height: 70px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterLink = styled.a`
  color: black;
  font-size: 0.8em;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <li><FooterLink href="https://www.twitter.com/jsconfhi" target="_blank"><img width="30" height="30" alt="Twitter" src={twitterLogo}/></FooterLink></li>
      <li><FooterLink href="https://www.twitter.com/jsconfhi" target="_blank">News</FooterLink></li>
      <li><FooterLink href="/organizers">Organizers</FooterLink></li>
      <li><FooterLink href="http://jsconf.com/codeofconduct.html" target="_blank">Code of Conduct</FooterLink></li>
    </FooterContent>
  </FooterWrapper>
)

export default Footer
