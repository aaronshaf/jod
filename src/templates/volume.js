import React from "react";
import { Link } from "gatsby";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import SEO from "../components/seo";

const VolumeWrapper = styled.div`
  border-top: 1px solid #faf9f3;
  @media (min-width: 641px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Volume = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.92rem;
`;

const VolumeTitle = styled.h2`
  @media (max-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const DiscourseList = styled.div`
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-bottom: 1px solid #e3e1ce;
  border-left: 1px solid #e3e1ce;
  border-spacing: 0;
  border-top: 1px solid #e3e1ce;
  clear: both;
  max-width: 100%;
  background-color: white;
  margin-bottom: 16px;
  @media (max-width: 640px) {
    padding: 12px;
  }
`;

const DiscourseListItem = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media (min-width: 641px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  &:first-of-type {
    margin-top: 8px;
  }
  &:last-of-type {
    margin-bottom: 8px;
  }
  &:hover {
    background-color: #f8f8f8;
  }
`;

const Pages = styled.div`
  width: 80px;
  padding: 4px 8px;
  @media (max-width: 640px) {
    order: 4;
    padding-left: 24px;
  }
  @media (min-width: 641px) {
    padding-left: 12px;
  }
`;

const DateComponent = styled.div`
  width: 145px;
  padding: 4px 8px;
  @media (max-width: 640px) {
    padding-left: 24px;
    order: 3;
  }
`;

const Speaker = styled.div`
  padding: 4px 8px;
  @media (max-width: 640px) {
    order: 2;
    padding-left: 24px;
  }
  @media (min-width: 641px) {
    width: 130px;
    padding-left: 24px;
  }
`;
const Title = styled.div`
  flex: 1;
  @media (max-width: 640px) {
    order: 1;
  }
  padding: 4px 8px;
  padding-right: 12px;
`;

export default ({
  pageContext: { volumeNumbers, volumeNumber, discourses }
}) => {
  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <SEO title={`Journal of Discourses, vol. ${volumeNumber}`} />
      <VolumeWrapper>
        <Volume>
          <VolumeTitle>Volume {volumeNumber}</VolumeTitle>
          <DiscourseList>
            {discourses.map(discourse => {
              const event = new Date();
              if (discourse.date) {
                event.setFullYear(parseInt(discourse.date.substr(0, 4), 10));
                event.setMonth(parseInt(discourse.date.substr(5, 7), 10) - 1);
                event.setDate(parseInt(discourse.date.substr(8, 10), 10));
                event.setUTCHours(0);
              }
              const dateOptions = {
                year: "numeric",
                month: "long",
                day: "numeric"
              };
              return (
                <DiscourseListItem key={discourse.id}>
                  <Pages>
                    pp. {discourse.start_page}-{discourse.end_page}
                  </Pages>
                  <DateComponent title={discourse.date}>
                    {discourse.date &&
                      event.toLocaleDateString("default", dateOptions)}
                  </DateComponent>
                  <Speaker>{discourse.speaker}</Speaker>
                  <Title>
                    <Link
                      to={`/${discourse.volume}/${discourse.start_page}`}
                      dangerouslySetInnerHTML={{
                        __html: prepareTitle(discourse.title)
                      }}
                    />
                  </Title>
                </DiscourseListItem>
              );
            })}
          </DiscourseList>
        </Volume>
      </VolumeWrapper>
    </Layout>
  );
};
