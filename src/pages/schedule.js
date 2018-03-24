import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
const Schedule = () => (
  <Container>
    <h1>Schedule</h1>
    <p>Welcome to schedule</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default Schedule
