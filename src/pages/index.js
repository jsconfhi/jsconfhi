import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Columns, { Column } from '../components/Columns'
import styled from 'styled-components'
import theme from '../theme'

const H2 = styled.h2`
  color: ${theme.colors.textWhite};
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${theme.spaces.small} 0;
  text-transform: uppercase;
`

const HeroContent = styled.div`
  align-self: center;
  background-color: ${theme.colors.background90};
  color: ${theme.colors.textYellow};
  max-width: 800px;
  margin: ${theme.spaces.large} 0;
  padding: ${theme.spaces.large} 6rem;
  @media (max-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spaces.large};
  }
}
`

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
`

const DatesAndSocialsItem = styled.div`
  margin: ${theme.spaces.medium} 0;
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
`

const SocialLink = styled.a`
  color: ${theme.colors.textYellow};
  margin: 0 ${theme.spaces.micro};
`

const EmailSignupForm = styled.div`
  align-item: center;
  display: flex;
  margin-top: ${theme.spaces.small};
`

const EmailFormInput = styled.input`
  flex-grow: 1;
  font-size: ${theme.fontSizes.small};
  padding: ${theme.spaces.small};
`

const EmailFormButton = styled.input`
  background-color: ${theme.colors.textYellow};
  color: ${theme.colors.background};
  font-weight: bold;
  padding: ${theme.spaces.small};
`

const IndexPage = () => (
  <Layout>
    <Hero style={{ flexGrow: 1 }}>
      <HeroContent>
        <div
          style={{
            fontSize: theme.fontSizes.large,
            marginBottom: theme.spaces.xSmall,
            textTransform: 'uppercase',
          }}
        >
          Announcing
        </div>
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          JSConf: Hawaiʻi
        </h3>
        <DatesAndSocials>
          <DatesAndSocialsItem>Feb 7th + 8th 2019</DatesAndSocialsItem>
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
        {
          // TODO: Fix this newsletter signup again and deal with styling
        }
        <div>
          <div id="mc_embed_signup">
            <form
              action="https://twitter.us18.list-manage.com/subscribe/post?u=c9c542019e2372811b2b8cd10&amp;id=affde4125d"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Sign up for updates</label>
                <EmailSignupForm className="signup-form">
                  <EmailFormInput
                    type="email"
                    placeholder="Email Address"
                    value=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                  <EmailFormButton
                    type="submit"
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </EmailSignupForm>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  />
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_c9c542019e2372811b2b8cd10_affde4125d"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          />
        </div>
      </HeroContent>
    </Hero>
    <Columns>
      <Column>
        <H2>Call for Speakers</H2>
        <p>Our call for speakers is now open!</p>
        <p>
          Read more about our CFP process, presenting at JSConf:Hawaiʻi, and apply to speak now.
        </p>
        <Button to="/call-for-speakers">Learn More</Button>
      </Column>
      <Column>
        <H2>Sponsorships</H2>
        <p>
          We are currently offering <a href="/sponsors">sponsorship</a> packages
          for the inauguaral JSConf Hawaii coming February 2019. We’re looking
          forward to working with our sponsors to find the best way
          to connect each of you with our attendees in unique and meaningful
          ways.
        </p>
        <p>
          <a href="mailto:sponsor@jsconfhi.com">Contact us</a> to learn more
          about our available packages!
        </p>
      </Column>
    </Columns>
  </Layout>
)

export default IndexPage
