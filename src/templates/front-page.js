import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { volumeNumbers } }) => {
  return (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>Journal of Discourses</h1>
      <ul>
        {volumeNumbers.map(volumeNumber => (
          <li key={volumeNumber}>
            <Link to={`/${volumeNumber}`}>{volumeNumber}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
