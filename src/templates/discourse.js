import React from "react";
import { prepareTitle } from "../common.js";
import Header from "./header.js";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Discourse = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.92rem;
  line-height: 1.45em;
  margin-top: 14px;
`;

const DiscourseTitle = styled.h2`
  padding: 0;
  margin-left: 1.4em;
  text-indent: -1.4em;
  margin-bottom: 16px;
  margin-top: 6px;
  line-height: 1.15em;
`;

const Subtitle = styled.div``;

const Reporter = styled.div``;

const SpeakerImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

const Flex = styled.div`
  flex: 1;
`;

export default ({
  data: { file },
  pageContext: { volumeNumbers, volumeNumber, discourse }
}) => {
  return (
    <>
      <Header volumeNumbers={volumeNumbers} volumeNumber={volumeNumber} />
      <Discourse>
        <article>
          <div className="page">
            <Flex>
              <DiscourseTitle
                dangerouslySetInnerHTML={{
                  __html: prepareTitle(discourse.title)
                }}
              />
              <Subtitle>{prepareTitle(discourse.subtitle)}</Subtitle>
              <Reporter>
                Reported by {prepareTitle(discourse.reported_by)}
              </Reporter>
              <SpeakerImage>
                {file && (
                  <Img
                    fixed={file.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
              </SpeakerImage>
            </Flex>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: discourse.content
            }}
          />
        </article>
      </Discourse>
    </>
  );
};

export const query = graphql`
  query($mug: String!) {
    file(relativePath: { eq: $mug }) {
      childImageSharp {
        fixed(width: 160, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
