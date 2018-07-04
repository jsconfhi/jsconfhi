import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Sponsors = () => (
  <Container>
    <h1>Our Sponsors</h1>
    <p>
      At JSConf HI 2019, the best JS programmers will gather for a single track,
      two day conference that will showcase the future of JavaScript and we want
      you there as a sponsor!
    </p>
    <p>
      To learn more about sponsorship opportunities, read our{' '}
      <a href="#">prospectus</a> or contact us at{' '}
      <a href="mailto:sponsor@jsconfhi.com">sponsor@jsconfhi.com</a>!
    </p>
  </Container>
)

export default Sponsors
