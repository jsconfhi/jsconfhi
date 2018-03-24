import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Link to="/schedule/" style={{ color: 'white', textDecoration: 'none'}}>Schedule</Link>
      <Link to="/call-for-speakers/" style={{ color: 'white', textDecoration: 'none'}}>Speak</Link>
      <Link to="/sponsors/" style={{ color: 'white', textDecoration: 'none'}}>Sponsors</Link>
    </ul>
  </nav>
)

export default Nav
