import React from "react"
import { Link } from "gatsby"
import { prepareTitle } from "../common.js"

export default ({ pageContext: { discourse } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <article>
      <h1
        dangerouslySetInnerHTML={{
          __html: prepareTitle(discourse.title),
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: prepareTitle(discourse.content),
        }}
      />
    </article>
    <Link to="/">Back</Link>
  </div>
)
