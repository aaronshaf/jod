import React from "react";
import { prepareTitle } from "../common.js";
import Header from "./header.js";
import styled from "@emotion/styled";

const Discourse = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.92rem;
  line-height: 1.45em;
`;

export default ({
  pageContext: { volumeNumbers, volumeNumber, discourse }
}) => (
  <>
    <Header volumeNumbers={volumeNumbers} volumeNumber={volumeNumber} />
    <Discourse>
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
    </Discourse>
  </>
);
