import Button from '../components/Button'
import Hero from '../components/Hero'
import HeroLabel from '../components/Hero/contentLabel'
import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import theme from '../theme'

const Callout = styled.div`
  background-color: white;
  display: flex;
  max-width: ${theme.containerWidth};
  padding: ${theme.spaces.medium};
  width: 100%;
  @media (max-width: ${theme.breakpoints.medium}) {
    flex-direction: column;
  }
`

const CalloutTitle = styled.div`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  color: ${theme.colors.background};
`

const ContactBlock = styled.div`
  background-color: ${theme.colors.gray};
  flex-grow: 1;
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  padding: ${theme.spaces.large};
  text-align: center;
`

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
`

const CalloutText = styled.div`
  flex-basis: 0;
  flex-grow: 3;
  flex-shrink: 1;
`

const ContactLink = styled.a`
  text-decoration: none;
`

const Sponsors = () => (
  <Layout style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
    <Hero navTitle="Sponsors">
      <HeroLabel>Sponsorship Opportunities</HeroLabel>
      <Callout>
        <CalloutRail>
          <CalloutTitle>Join us as a Sponsor</CalloutTitle>
          <Button color="dark">Learn More</Button>
        </CalloutRail>
        <CalloutText>
          <p>Become a founding partner of JSConf: Hawaiʻi!</p>
          <p>
            With over 300 developers from around the world attending, and
            hundreds more following along at home, sponsoring the conference is
            one of the best ways to connect with Javascript developers.
          </p>
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
            {' '}
            For more information, and to explore the full range of options,
            click 'Learn More' to view our prospectus. And if you have a unique
            idea, we're excited to work with you to make your vision a reality,
            so please feel free to contact us for more information.
          </p>
        </CalloutText>
      </Callout>
    </Hero>

    <ContactBlock>
      <h2 style={{ color: theme.colors.background }}>Contact Us</h2>
      <p>
        <ContactLink href="mailto:sponsor@jsconfhi.com">
          sponsor@jsconfhi.com
        </ContactLink>
      </p>
    </ContactBlock>
  </Layout>
)

export default Sponsors
