import React from "react";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import {
  Columns,
  Discourse,
  DiscourseTitle,
  EvenPageNumber,
  FirstPage,
  Flex,
  OddPageNumber,
  Page,
  SubtleLink,
  PageHead,
  PageHeader,
  Reporter,
  SpeakerImage,
  Subtitle
} from "./discourse.styles.js";

export default ({
  data: { file },
  pageContext: { volumeNumbers, volumeNumber, discourse }
}) => {
  console.debug(discourse);
  // const citation = `${discourse.speaker}, "${discourse.page_header}", Journal of Discourses, vol. ${discourse.volume}, pp. ${discourse.start_page}-${discourse.end_page}, AAAA 16, 1853.`;
  const seoTitle = `${prepareTitle(discourse.page_header)}, by ${
    discourse.speaker
  } (Journal of Discourses ${discourse.volume}:${discourse.start_page}-${
    discourse.end_page
  })`;
  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <SEO title={seoTitle} description={prepareTitle(discourse.subtitle)} />
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
            <Page key={index} id={pageNumber}>
              <PageHead>
                <EvenPageNumber>
                  {pageNumber % 2 === 0 && (
                    <SubtleLink
                      to={`${discourse.volume}/${discourse.start_page}#${pageNumber}`}
                    >
                      {pageNumber}
                    </SubtleLink>
                  )}
                </EvenPageNumber>
                <PageHeader
                  dangerouslySetInnerHTML={{
                    __html:
                      pageNumber % 2 === 1
                        ? prepareTitle(discourse.page_header)
                        : "Journal of Discourses"
                  }}
                />
                <OddPageNumber>
                  {pageNumber % 2 === 1 && (
                    <SubtleLink
                      to={`${discourse.volume}/${discourse.start_page}#${pageNumber}`}
                    >
                      {pageNumber}
                    </SubtleLink>
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
