import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../../theme'

export const headerHeight = 30

const HeaderWrapper = styled.div`
  background: ${theme.colors.background};
  color: ${theme.colors.textYellow};
  height: ${headerHeight}px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 0;
  padding: 0;
  height: ${headerHeight}px;
  width: 100%;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

const Header = () => (
  <HeaderWrapper>
    JSConf: Hawai'i | 07-08 February 2019 | Honolulu, HI
  </HeaderWrapper>
)

export default Header
