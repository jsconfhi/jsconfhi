import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Section = styled.div`
  margin-top: 3em;
`

const H2 = styled.h2`
  margin: 0.5em 0;
`

const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
  margin-top: 18px;
  padding: 18px 24px;
  color: white;
  background-color: #ff3c3c;
  text-transform: uppercase;
`

const IndexPage = () => (
  <div>
    <Hero />
    <Container>
      <Section>
        <H2>Call for Speakers</H2>
        <p>We will be opening our Call for Speakers in June, 2018!</p>
        <p>
          Read more about our CFP process that is designed to shine the
          spotlight on the latest ideas and future leaders of the JavaScript
          world.
        </p>
        <ButtonLink href="/call-for-speakers">Learn More</ButtonLink>
      </Section>
      <Section>
        <H2>Sponsorships</H2>
        <p>
          We are currently offering <a href="/sponsors">sponsorship</a> packages
          for the inauguaral JSConf Hawaii coming February 2019. We’re looking
          forward to working with all of our great sponsors to find the best way
          to connect each of you with our attendees in unique and meaningful
          ways.
        </p>
        <p>
          <a href="mailto:sponsor@jsconfhi.com">Contact us</a> to learn more
          about our available packages!
        </p>
      </Section>
      <Section>
        <H2>Code of Conduct</H2>
        <p>
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct.{' '}
          <a href="http://jsconf.com/codeofconduct.html" target="_blank">
            Read the Code of Conduct
          </a>.
        </p>
      </Section>
    </Container>
  </div>
)

export default IndexPage
