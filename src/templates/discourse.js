import React from "react";
import { Link } from "gatsby";
import { prepareTitle } from "../common.js";
import Header from "./header.js";

export default ({
  pageContext: { volumeNumbers, volumeNumber, discourse }
}) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <Header volumeNumbers={volumeNumbers} volumeNumber={volumeNumber} />
    <article>
      <h1
        dangerouslySetInnerHTML={{
          __html: prepareTitle(discourse.title)
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: prepareTitle(discourse.speaker)
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: discourse.content
        }}
      />
      {/* <div
        dangerouslySetInnerHTML={{
          __html: prepareContent(discourse.content)
        }}
      /> */}
    </article>
  </div>
);
