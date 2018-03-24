import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-top: 3em;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  color: #038091;
`;

const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
  margin-top: 18px;
  padding: 18px;
  color: white;
  background-color: #ff3c3c;
`;

const IndexPage = () => (
  <div>
    <Hero
      title="JSConf Hawaii"
      subtitle="February 7th-8th, 2019"
      secondarySubtitle="Honolulu, HI"
    />
    <Container>
      <Section>
        <H2>Call for Speakers</H2>
        <p>We will be opening our Call for Proposals in June, 2018!</p>
        <p>Read more about our CFP process that is designed to shine the
           spotlight on the latest ideas and future leaders of the JavaScript world.</p>
        <ButtonLink href="/call-for-speakers">SUBMIT YOUR PROPOSAL</ButtonLink>
      </Section>
      <Section>
        <H2>Sponsorships</H2>
        <p>We are currently offering <a href="/">sponsorship packages</a> for the inauguaral JSConf Hawaii coming
           February 2019. We’re looking forward to working with all of our great sponsors to find
          the best way to connect  each of you with our attendees in unique and meaningful ways.</p>
        <p><a href="/">Contact us</a> to learn more about our available packages!</p>
      </Section>
      <Section>
        <H2>Code of Conduct</H2>
        <p>All attendees, speakers, sponsors and volunteers at our conference are required to
          agree with the following code of conduct. <a href="http://jsconf.com/codeofconduct.html">Read the Code of Conduct</a>.</p>
      </Section>
    </Container>
  </div>
)

export default IndexPage
