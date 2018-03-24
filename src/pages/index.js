import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/call-for-speakers/">CFP</Link>
    <Link to="/sponsors/">Sponsors</Link>
    <Link to="/schedule/">Schedule</Link>
  </div>
)

export default IndexPage
