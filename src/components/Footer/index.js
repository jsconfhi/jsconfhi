import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


export const footerHeight = 40;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 1em;
  color: #03282c;
  background: #f2dc1a;
  flex-shrink: 1;
  height: ${footerHeight}px;
  font-size: 0.9em;
  font-weight: bold;
  width: 100%;
  position: fixed;
  bottom: 0;
`

const FooterLinks = styled.ul`
  display: flex;
  flex-grow: 1;
  list-style: none;
`

const FooterSocials = styled.div`
  font-size: 2em;
`

const FooterLink = styled.a`
  color: #03282c;
  padding: 0 1em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const FooterSocialLink = styled.a`
  color: #03282c;
  padding: 0 0.3em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterLinks>
      <li>
        <FooterLink href="http://jsconf.com/codeofconduct.html" target="_blank">
          Code of Conduct
        </FooterLink>
      </li>
      <li>
        <FooterLink href="/organizers">Organizers</FooterLink>
      </li>
    </FooterLinks>
    <FooterSocials>
      <FooterSocialLink aria-label="Instagram" href="https://www.instagram.com/jsconfhi" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </FooterSocialLink>
      <FooterSocialLink aria-label="Twitter" href="https://www.twitter.com/jsconfhi" target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </FooterSocialLink>
      <FooterSocialLink aria-label="Facebook" href="https://www.facebook.com/JSConfHi" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </FooterSocialLink>
    </FooterSocials>
  </FooterWrapper>
)

export default Footer
