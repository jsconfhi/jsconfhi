import Button from '../components/Button'
import Hero from '../components/Hero'
import HeroLabel from '../components/Hero/contentLabel'
import React from 'react'
import Link from 'gatsby-link'
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

const Guidelines = styled.div`
  background-color: ${theme.colors.background};
  color: ${theme.colors.textYellow};
  padding: ${theme.spaces.large};
`
const GuidelinesContainer = styled.div`
  margin: 0 auto;
  max-width: ${theme.containerWidth};
`

const CalloutTitle = styled.div`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  color: ${theme.colors.background};
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

const H1 = styled.h1`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.textWhite};
  margin-bottom: ${theme.spaces.large};
  text-transform: uppercase;
`

const H2 = styled.h2`
  font-weight: bold;
`

const CFP = () => (
  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
    <Hero navTitle="Speakers">
      <HeroLabel>Call for Speakers</HeroLabel>
      <Callout>
        <CalloutRail>
          <CalloutTitle>Present in Hawaiʻi</CalloutTitle>
          <Button color="dark">Apply / Suggest Now</Button>
        </CalloutRail>
        <CalloutText>
          <H2>Topics</H2>
          <p>
            We are seeking out new ideas and concepts, along with novel usages, that push the boundaries of
            JavaScript or help strengthen the JavaScript community. We welcome strange, unusual, non-traditional,
            or even non-JS presentations as long as they remain within the boundaries of our
            well-established{' '}
            <Link to="/about#coc">
              Code of Conduct
            </Link>. More information can be found in the guidelines section.
          </p>

          <H2>Nominate a Speakers</H2>
          <p>
            If you want to nominate a person and idea that you would like to see,
            you can submit them via our submission
            form. Please be sure to include valid contact information so that we can reach out to
            your suggested speaker.
          </p>

          <H2>Selection Process</H2>
          <p>
            All submissions are anonymized before review in an attempt to remove any conscious or
            unconscious biases towards the submitter.
          </p>
          <p>
            Due to the volume of requests we receive and logistics of organizing,
            we may not be able to provide specific feedback to applications we do not select.
            Many submissions will simply be duplicative in terms of material convered.
          </p>
          <p>
            The top submissions are then de-anonymized so we can take speaker details
            into account. This ensures a diverse speaker line-up of people from all
            backgrounds and speaking experience.
          </p>
        </CalloutText>
      </Callout>
    </Hero>
    <Guidelines>
      <GuidelinesContainer>
        <H1>Guidelines</H1>
        <p>What else is there to be said?</p>
      </GuidelinesContainer>
    </Guidelines>
  </div>
)

export default CFP
