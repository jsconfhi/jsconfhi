import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const InfoBlock = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: ${theme.spaces.large};
  padding: ${theme.spaces.xLarge};
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: ${theme.spaces.large};
  }
`

const Title = styled.h1`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  text-transform: uppercase;
`

export const InfoBlockH2 = styled.h2`
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
`

export const InfoBlockH3 = styled.h3`
  font-weight: bold;
`

const LargeInfoBlock = ({ children, id, title }) => (
  <InfoBlock id={id}>
    <Title>{title}</Title>
    <div>{children}</div>
  </InfoBlock>
)

export default LargeInfoBlock
