import React from "react";
import { prepareTitle, slugify } from "../common.js";
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
              {props.data.file && (
                <Img fixed={props.data.file.childImageSharp.fixed} />
              )}
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

export const query = graphql`
  query($mug: String!) {
    file(relativePath: { eq: $mug }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 160, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
