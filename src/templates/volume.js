import React from "react"
import { Link } from "gatsby"
import { prepareTitle } from "../common.js"

export default ({ pageContext: { volumeNumber, discourses } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>Volume {volumeNumber}</h1>
    <Link to="/">Back</Link>
    <table className="tabular hover-rows">
      <thead>
        <tr>
          <th>Pages</th>
          <th>Date</th>
          <th>Speaker</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {discourses.map(discourse => {
          return (
            <tr key={discourse.id}>
              <td>
                {discourse.start_page} - {discourse.end_page}
              </td>
              <td>{discourse.date}</td>
              <td>{discourse.speaker}</td>
              <td>
                <Link
                  to={`/${discourse.volume}/${discourse.start_page}`}
                  dangerouslySetInnerHTML={{
                    __html: prepareTitle(discourse.title),
                  }}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
