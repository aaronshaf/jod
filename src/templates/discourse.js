import React, { useState, useRef, useEffect } from "react";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  Citation,
  CitationButton,
  Columns,
  CurrentDiscourse,
  Discourse,
  DiscourseNav,
  DiscourseTitle,
  EvenPageNumber,
  FirstPage,
  Flex,
  NextDiscourse,
  OddPageNumber,
  Page,
  PageHead,
  PageHeader,
  PreviousDiscourse,
  Reporter,
  SpeakerImage,
  Subtitle,
  SubtleLink
} from "./discourse.styles.js";

export default ({
  data,
  pageContext: {
    volumeNumbers,
    volumeNumber,
    discourse,
    previousDiscourse,
    nextDiscourse
  }
}) => {
  const [showCitation, setShowCitation] = useState(false);
  // const [copySuccess, setCopySuccess] = useState("");
  const inputRef = useRef(null);

  function doIt() {
    if (window.getSelection && inputRef.current) {
      const range = document.createRange();
      range.selectNode(inputRef.current);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      alert("text copied");
    }
  }

  useEffect(() => {
    doIt();
  }, [inputRef.current]);

  // function copyToClipboard(e) {
  //   inputRef.current.select();
  //   document.execCommand("copy");
  //   e.target.focus();
  //   setCopySuccess("Copied!");
  // }

  const seoTitle = `${prepareTitle(discourse.page_header)}, by ${
    discourse.speaker
  } (Journal of Discourses ${discourse.volume}:${discourse.start_page}-${
    discourse.end_page
  })`;
  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <SEO title={seoTitle} description={prepareTitle(discourse.subtitle)} />
      <Discourse>
        <DiscourseNav>
          <PreviousDiscourse>
            {previousDiscourse && (
              <>
                <span style={{ marginRight: "4px" }}>&larr;</span>
                <Link
                  to={`/${volumeNumber}/${previousDiscourse.start_page}`}
                  title={`${previousDiscourse.page_header}, by ${previousDiscourse.speaker}`}
                >
                  {previousDiscourse.volume !== discourse.volume && (
                    <>vol. {previousDiscourse.volume}, </>
                  )}
                  pp. {previousDiscourse.start_page}-
                  {previousDiscourse.end_page}
                </Link>
              </>
            )}
          </PreviousDiscourse>
          <CurrentDiscourse>
            vol. {volumeNumber}, pp. {discourse.start_page}-{discourse.end_page}
            <CitationButton onClick={() => setShowCitation(!showCitation)}>
              <Img
                fixed={data.citationImage.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </CitationButton>
          </CurrentDiscourse>
          <NextDiscourse>
            {nextDiscourse && (
              <>
                <Link
                  to={`/${volumeNumber}/${nextDiscourse.start_page}`}
                  title={`${nextDiscourse.page_header}, by ${nextDiscourse.speaker}`}
                >
                  {nextDiscourse.volume !== discourse.volume && (
                    <>vol. {nextDiscourse.volume}, </>
                  )}
                  pp. {nextDiscourse.start_page}-{nextDiscourse.end_page}
                </Link>
                <span style={{ marginLeft: "4px" }}>&rarr;</span>
              </>
            )}
          </NextDiscourse>
        </DiscourseNav>
        {showCitation && (
          <Citation ref={inputRef}>
            {discourse.speaker}, "{discourse.page_header}", Journal of
            Discourses, vol. {discourse.volume}, pp. {discourse.start_page}-
            {discourse.end_page}, AAAA 16, 1853.
          </Citation>
        )}
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
              {data.mug && (
                <Img
                  fixed={data.mug.childImageSharp.fixed}
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
                      to={`/${discourse.volume}/${discourse.start_page}#${pageNumber}`}
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
                      to={`/${discourse.volume}/${discourse.start_page}#${pageNumber}`}
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
    mug: file(relativePath: { eq: $mug }) {
      childImageSharp {
        fixed(width: 160, height: 200) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    citationImage: file(relativePath: { eq: "cite.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 18, height: 18) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;
