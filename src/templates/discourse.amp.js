import React, { useState, useRef, useEffect } from "react";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import {
  Citation,
  CitationButton,
  CitationCopyNotice,
  CitationText,
  ColumnIcon,
  Columns,
  ColumnSeparator,
  CurrentDiscourse,
  Discourse,
  DiscourseNav,
  DiscourseTitle,
  EvenPageNumber,
  FirstPage,
  Flex,
  LeftColumn,
  NextDiscourse,
  OddPageNumber,
  Page,
  PageHead,
  PageHeader,
  PreviousDiscourse,
  RightColumn,
  Reporter,
  SpeakerImage,
  Subtitle,
  SubtleLink,
  TraversalLink,
  TraversalLinkImageStart,
  TraversalLinkImageEnd,
  TraversalLinkText
} from "./discourse.styles.js";
import previousSvg from "../images/previous.svg";
import nextSvg from "../images/next.svg";
import columnSvg from "../images/column.svg";
import Entities from "html-entities";

const Html4Entities = Entities.Html4Entities;

const entities = new Html4Entities();

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
  const [copySuccess, setCopySuccess] = useState(false);
  const citationSpanRef = useRef(null);

  useEffect(() => {
    if (showCitation && window.getSelection && citationSpanRef.current) {
      window.getSelection().removeAllRanges();
      const range = document.createRange();
      range.selectNode(citationSpanRef.current);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      setCopySuccess(true);
    }
  }, [showCitation, citationSpanRef.current]);

  const seoTitle = `${entities.decode(
    prepareTitle(discourse.page_header)
  )}, by ${discourse.speaker} (Journal of Discourses ${discourse.volume}:${
    discourse.start_page
  }-${discourse.end_page})`;

  let event;
  if (discourse.date) {
    const fullYear = parseInt(discourse.date.substr(0, 4), 10);
    const month = parseInt(discourse.date.substr(5, 7), 10) - 1;
    const day = parseInt(discourse.date.substr(8, 10), 10);
    event = new Date(Date.UTC(fullYear, month, day, 0, 0, 0));
  }
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  };
  const formattedDate =
    discourse.date && event && event.toLocaleDateString("default", dateOptions);

  const parentUrl = `https://jod.mrm.org/${discourse.volume}`;

  const nextUrl =
    nextDiscourse &&
    `https://jod.mrm.org/${nextDiscourse.volume}/${nextDiscourse.start_page}`;

  const previousUrl =
    previousDiscourse &&
    `https://jod.mrm.org/${previousDiscourse.volume}/${previousDiscourse.start_page}`;

  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <SEO
        title={seoTitle}
        description={prepareTitle(discourse.subtitle)}
        canonicalUrl={`https://jod.mrm.org/${volumeNumber}/${discourse.start_page}`}
        parentUrl={parentUrl}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
      <Discourse>
        <DiscourseNav>
          <PreviousDiscourse>
            {previousDiscourse && (
              <>
                <TraversalLink
                  to={`/${previousDiscourse.volume}/${previousDiscourse.start_page}`}
                  title={`${previousDiscourse.page_header}, by ${previousDiscourse.speaker}`}
                >
                  <TraversalLinkImageStart src={previousSvg} />
                  <TraversalLinkText>
                    {previousDiscourse.volume !== discourse.volume && (
                      <>vol. {previousDiscourse.volume}, </>
                    )}
                    pp. {previousDiscourse.start_page}-
                    {previousDiscourse.end_page}
                  </TraversalLinkText>
                </TraversalLink>
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
                <TraversalLink
                  to={`/${nextDiscourse.volume}/${nextDiscourse.start_page}`}
                  title={`${nextDiscourse.page_header}, by ${nextDiscourse.speaker}`}
                >
                  <TraversalLinkText>
                    {nextDiscourse.volume !== discourse.volume && (
                      <>vol. {nextDiscourse.volume}, </>
                    )}
                    pp. {nextDiscourse.start_page}-{nextDiscourse.end_page}
                  </TraversalLinkText>
                  <TraversalLinkImageEnd src={nextSvg} />
                </TraversalLink>
              </>
            )}
          </NextDiscourse>
        </DiscourseNav>
        {showCitation && (
          <Citation>
            <CitationText ref={citationSpanRef}>
              {discourse.speaker}, "
              <span
                dangerouslySetInnerHTML={{
                  __html: discourse.page_header
                }}
              />
              ", <em>Journal of Discourses</em>, vol. {discourse.volume}, pp.{" "}
              {discourse.start_page}-{discourse.end_page}
              {formattedDate && <>, {formattedDate}</>}.
            </CitationText>
            {copySuccess && <CitationCopyNotice>(copied)</CitationCopyNotice>}
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
          if (page.columns == null) {
            return null;
          }
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
              <Columns>
                <LeftColumn
                  dangerouslySetInnerHTML={{
                    __html: page.columns[0]
                  }}
                />
                <ColumnSeparator>
                  <ColumnIcon src={columnSvg} />
                </ColumnSeparator>
                <RightColumn
                  dangerouslySetInnerHTML={{
                    __html: page.columns[1]
                  }}
                />
              </Columns>
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
