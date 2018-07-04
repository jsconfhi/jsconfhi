import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const List = styled.ul`
  line-height: 2em;
  list-style-type: circle;
  margin-left: 2em;
`

const Emphasized = styled.p`
  font-weight: bold;
`
const CFP = () => (
  <Container>
    <h1>Call for Speakers</h1>
    <Emphasized>
      We will be opening our Call for Speakers in June, 2018!
    </Emphasized>
    <p>
      We are seeking out new ideas and concepts that push the boundaries of
      JavaScript and the JavaScript community. We welcome strange and unusual
      presentations as long as they remain within the boundaries of our
      well-established{' '}
      <a href="http://jsconf.com/codeofconduct.html" target="_blank">
        Code of Conduct
      </a>. We are looking for talks focused on all parts of JavaScript,
      including but not limited to:
    </p>
    <List>
      <li>Mobile Web</li>
      <li>The Future of JavaScript</li>
      <li>Web Security</li>
      <li>WebAssembly</li>
      <li>Life of a Developer</li>
      <li>Server-Side JavaScript</li>
      <li>Performance and Optimization</li>
      <li>IoT, Hardware, and Embedded JavaScript</li>
      <li>Artificial Intelligence and Machine Learning</li>
      <li>Education and Outreach of Computer Programming</li>
      <li>Putting JavaScript into places no one expected</li>
      <li>Your Passion!</li>
    </List>
    <h2>Inverse Call for Speakers</h2>
    <p>
      In additional to the typical "Call for Speakers" process, we also offer an
      "Inverse Call for Speakers". If you want to nominate a person and idea
      that you would like to see, you can submit that as well with the submissio
      form. If you are submitting yourself, which is completely cool and
      encouraged, please mark your submission as "this is me", so we can write
      to let you know whether or not your submission was accepted.
    </p>

    <h2>Selection Process</h2>
    <p>
      All submissions are anonymized in an attempt to remove any conscious or
      unconscious biases towards the submitter.
    </p>
    <p>
      All submissions are reviewed and voted for by our organizers and
      volunteers. Each talk is categorized in one of several categories:
    </p>
    <List>
      <li>Design</li>
      <li>Infrastructure</li>
      <li>AI/ML</li>
      <li>UX/UI</li>
      <li>JS Library</li>
      <li>Mobile</li>
      <li>Other</li>
      <li>Server-Side</li>
    </List>
    <p>
      Each talk is rated on a scale from 1 to 10, taking into account the
      following criteria:
    </p>
    <List>
      <li>Coherence and clarity of proposal</li>
      <li>Relevance to the JavaScript community</li>
      <li>Novelty and originality of the topic</li>
      <li>Reasonably communicable in the time allotted</li>
    </List>
    <p>
      The top submissions are then de-anonymized so we can take speaker details
      into account. This ensures a diverse speaker line-up of people from all
      backgrounds and speaking experience.
    </p>
  </Container>
)

export default CFP
