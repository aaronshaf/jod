import React from "react";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Discourse = styled.article`
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

const FirstPage = styled.div`
  padding: 25px;
  padding-top: 20px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  -moz-box-shadow: 3px 3px 3px #e5e3d1;
  -webkit-box-shadow: 3px 3px 3px #e5e3d1;
`;

const Page = styled.div`
  padding: 25px;
  padding-top: 23px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: #fff;
  -moz-box-shadow: 3px 3px 3px #e5e3d1;
  -webkit-box-shadow: 3px 3px 3px #e5e3d1;

  & .column.left {
    padding-left: 0px;
    padding-right: 15px;
    border-right: 1px solid #ddd;
  }

  & .column {
    padding-left: 15px;
    border-right: 0px none;
  }
`;

const Columns = styled.div`
  display: flex;
  & p {
    margin: 0;
  }
  & p:not(.continued) {
    text-indent: 1.8em;
  }
`;

const PageHead = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const PageHeader = styled.div`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
`;

const EvenPageNumber = styled.div`
  width: 40px;
`;

const OddPageNumber = styled.div`
  width: 40px;
  text-align: right;
`;

const Subtitle = styled.div``;

const Reporter = styled.div``;

const SpeakerImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Flex = styled.div`
  flex: 1;
`;

export default ({
  data: { file },
  pageContext: { volumeNumbers, volumeNumber, discourse }
}) => {
  console.debug(discourse);
  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <Discourse>
        <FirstPage>
          <Flex>
            <DiscourseTitle
              dangerouslySetInnerHTML={{
                __html: prepareTitle(discourse.title)
              }}
            />
            <Subtitle>{prepareTitle(discourse.subtitle)}</Subtitle>
            <Reporter>
              Reported by {prepareTitle(discourse.reported_by)}.
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
        </FirstPage>
        {discourse.content.map((page, index) => {
          const pageNumber = discourse.start_page + index;
          return (
            <Page key={index}>
              <PageHead>
                <EvenPageNumber>
                  {pageNumber % 2 === 0 && pageNumber}
                </EvenPageNumber>
                <PageHeader>
                  {pageNumber % 2 === 1
                    ? prepareTitle(discourse.page_header)
                    : "Journal of Discourses"}
                </PageHeader>
                <OddPageNumber>
                  {pageNumber % 2 === 1 && (
                    <EvenPageNumber>{pageNumber}</EvenPageNumber>
                  )}
                </OddPageNumber>
              </PageHead>
              <Columns
                dangerouslySetInnerHTML={{
                  __html: page
                }}
              />
            </Page>
          );
        })}
      </Discourse>
    </Layout>
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
