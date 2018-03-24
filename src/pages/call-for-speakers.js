import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const CFP = () => (
  <Container>
    <h1>Call for Speakers</h1>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default CFP
