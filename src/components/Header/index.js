import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: white;
  border-bottom: 1px solid #eee;
`
//border-bottom: 1px solid #eee or #ff3c3c

const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Nav />
    </HeaderContent>
  </HeaderWrapper>
)

export default Header
