import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Sponsors = () => (
  <Container>
    <h1>Sponsors</h1>
    <p>Welcome to Sponsors page</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default Sponsors
