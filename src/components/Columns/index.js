import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const ContainerHolder = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding-top: 2em;
  width: 100%;
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
`

const Section = styled.div`
  flex: 1;
  margin: ${theme.spaces.large} ${theme.spaces.medium};
  & + & {
    border-left: ${(props) => `1px dashed`}
    padding-left: ${theme.spaces.large};
  }
`

const H2 = styled.h2`
  color: ${(props) => props.color};
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${theme.spaces.small} 0;
  text-align: center;
  text-transform: uppercase;
`

const Columns = ({
  children,
  backgroundColor = theme.colors.background,
  color = theme.colors.textYellow,
  title
}) => (
  <div>
    <ContainerHolder backgroundColor={backgroundColor} color={color}>
      { title && <H2 color={color}>{title}</H2> }
      <Container>
        {children}
      </Container>
    </ContainerHolder>
  </div>
)

export const Column = ({ children }) => (
  <Section>{children}</Section>
)

export default Columns
