import Button from '../components/Button'
import Hero from '../components/Hero'
import HeroLabel from '../components/Hero/contentLabel'
import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
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
  column-count: 2;
  column-gap: ${theme.spaces.xLarge};
  margin: 0 auto;
  max-width: ${theme.containerWidth};
  @media (max-width: ${theme.breakpoints.medium}) {
    column-count: 1;
  }
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
const B = styled.b`
  font-weight: bold;
`

const I = styled.i`
  font-style: italic;
`

const CFP = () => (
  <Layout style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
    <Hero navTitle="Speakers">
      <HeroLabel>Call for Speakers</HeroLabel>
      <Callout>
        <CalloutRail>
          <CalloutTitle>Present in Hawaiʻi</CalloutTitle>
          <div>
            <div><Button color="dark" href="https://sessionize.com/jsconf-hawaii-2019/">Apply Now</Button></div>
            <B>Open until Aug 10</B>
          </div>
        </CalloutRail>
        <CalloutText>
          <H2>Speaking</H2>
          <p>
            JSConf Hawaii does not have a specific themes for talks.
            Our goal in this process is to select a broad range of topics
            that would appeal to as many JavaScript developers as possible.
            We welcome unusual, strange, non-traditional, or even non-JS presentations
            as long as they remain within the boundaries of our{' '}
            <Link to="/about#coc">Code of Conduct</Link>.
          </p>

          <p>
            Selected speakers will have the full cost of attending covered
            if their companies does not fund events, including ticket, hotel and airfare,
              along with taxi to/from airport. Certain incidentals or outside meals may be
            at your own expense.
          </p>
          <p>
            <I>If you are selected to speak, you will have the full cost of your ticket refunded.
            So please do not let applying to speak cause
            you to miss out on <Link to="/attend">attending</Link>.</I>
          </p>

          <H2>Nominate a Speakers</H2>
          <p>
            If you want to nominate a person and idea that you would like to
            see, you can email <Link href="mailto:speakers@jsconfhi.com">attending</Link>. Please be sure to
            include valid contact information so that we can reach out to your
            suggested speaker.
          </p>

          <H2>Selection Process</H2>
          <p>
            All submissions are anonymized before review in an attempt to remove
            any conscious or unconscious biases towards the submitter.
          </p>
          <p>
            The top submissions are then de-anonymized so we can take speaker details into account.
            We may also do a second round and request a short video of you pitching your idea to
            help us learn more about you and your talk.
          </p>
        </CalloutText>
      </Callout>
    </Hero>
    <Guidelines>
      <H1>Guidelines and details</H1>
      <GuidelinesContainer>
        <H2>Details</H2>
        <p>
          We are inviting the JS community to help us make JSConf Hawaii
          an amazing experience by submitting your talk for consideration at our
          inaugural conference February 7-8, 2019. We are looking to uncover new ideas and concepts,
          along with novel usages, that push the boundaries of JavaScript or help strengthen the
          JavaScript community.
        </p>

        <H2>Topics</H2>
        <p>
          JSConf Hawaii does not have a specific themes for talks.
          Our goal in this process is to select a broad range of topics that would appeal to as
          many JavaScript developers as possible. We welcome unusual, strange, non-traditional,
          or even non-JS presentations as long as they remain within the
          boundaries of our{' '}<Link to="/about#coc">Code of Conduct</Link>{' '}
          and in general benefit this community.
        </p>

        <p>
          Talks should be in English and if you’ve already given your talk at a small conference,
          that’s ok, but we would appreciate if it can be updated with fresh and original
          examples for this unique conference! You are welcome to submit multiple topics or
          ideas for consideration, however you can only present once.
        </p>

        <p>
          All talks should be 25-30 minutes in length. If you feel you have a talk that would
          benefit from a longer or shorter period of time, please note that on your submission notes.
        </p>
        <p>
          We expect these sessions to constitue a majority if not all of our content.
          We've left other submission options available for unique or standout suggestions for content.
          But please note: we may not be able to pay your expenses for other types of content.
          However, we're happy to discuss ideas.
        </p>

        <H2>The Process</H2>
        <p>
          All submissions are anonymized before review in an attempt to remove any
          conscious or unconscious biases towards the submitter.
        </p>
        <p>
          The top submissions are then de-anonymized so we can take speaker details into account.
          If needed, we may also do a second round and request a short video of you
          pitching your idea to help us learn more about you and your talk.
        </p>

        <p>
          All selected speakers are expected to have 2 calls with an organizer:
          one content outline discussion and conference info chat about 2 months prior (early December),
          and one more concrete dry-run and update roughly 2 weeks prior.
        </p>

        <H2>Diversity</H2>
        <p>
          We encourage first-time speakers to apply, don’t be shy!
          We are happy to work with you on your presentation and speaking skills
          to make sure you’re successful with a larger audience.
        </p>

        <p>
          We are seeking to build a diverse lineup from all types of people and experiences.
          We do this in part by asking for some demographic information on the submission page.
          All submissions will be anonymised of personal and demographic information to remove
          any conscious or unconscious biases towards the submitter.
        </p>

        <H2>Perks</H2>
        <p>
          Selected speakers will have the full cost of attending covered if their
          companies do not fund events, including conference ticket, three nights hotel,
          and airfare, along with taxi to/from airport. Certain incidentals or outside
          meals may be at your own expense. If you previously purchased a ticket and
          are selected to speak, you will have the full cost of your ticket refunded.
          So please do not let applying to speak cause you to miss out on attending.
        </p>

        <p>
          As a speaker you will have a direct point of contact to help with travel, AV, and
          all those other fun logistical points. Childcare will be available on request for speakers.
          We will be recording and transcribing your talks as well, so you’ll have a great addition
          to your speaker resume that you can share with the broader community.
          More details to come from the speaker point of contact.
        </p>

        <H2>Requirements</H2>
          <p>
          We ask that if selected, you provide a bio, photo and description for our site and program.
          We want to hype up your talk! The conference will post a video of your talk for the broader
          community on YouTube. We may use video / pictures / likenesses of you and your talk in
          future promotional materials. You must comply with the Code of Conduct both before
          and at the conference.
          </p>

      </GuidelinesContainer>
    </Guidelines>
  </Layout>
)

export default CFP
