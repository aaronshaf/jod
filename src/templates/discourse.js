import React from "react";
import { prepareTitle, slugify } from "../common.js";
import Header from "./header.js";
import styled from "@emotion/styled";

const Discourse = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.92rem;
  line-height: 1.45em;
  margin-top: 14px;
`;

const DiscourseTitle = styled.h2`
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;

const Subtitle = styled.div``;

const Reporter = styled.div``;

export default props => {
  const {
    pageContext: { volumeNumbers, volumeNumber, discourse }
  } = props;
  return (
    <>
      <Header volumeNumbers={volumeNumbers} volumeNumber={volumeNumber} />
      <Discourse>
        <article>
          <div className="page">
            <div>
              <DiscourseTitle
                dangerouslySetInnerHTML={{
                  __html: prepareTitle(discourse.title)
                }}
              />
              <Subtitle>{discourse.subtitle}</Subtitle>
              <Reporter>Reported by {discourse.reported_by}</Reporter>
              <div style={{ width: "170px" }}>
                <img
                  src={`/images/speakers/${slugify(discourse.speaker)}.jpg`}
                />
              </div>
            </div>
          </div>
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
};
