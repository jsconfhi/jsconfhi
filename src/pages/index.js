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

const IndexPage = () => (
  <div>
    <Hero />
    <Container>
      <Section>
        <h2>Call for Speakers</h2>
        <p>Some info about speaking</p>
      </Section>
      <Section>
        <h2>Sponsorships</h2>
        <p>Some info about sponsoring</p>
      </Section>
    </Container>
  </div>
)

export default IndexPage
