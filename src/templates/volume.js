import React from "react";
import { Link } from "gatsby";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const VolumeWrapper = styled.div`
  border-top: 1px solid #faf9f3;
`;

const Volume = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.92rem;
`;

const DiscourseList = styled.div`
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-bottom: 1px solid #e3e1ce;
  border-left: 1px solid #e3e1ce;
  border-spacing: 0;
  border-top: 1px solid #e3e1ce;
  clear: both;
  width: 100%;
  background-color: white;
  margin-bottom: 16px;
`;
const DiscourseListItem = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Pages = styled.div`
  width: 80px;
  padding: 4px 8px;
  padding-left: 12px;
`;

const Date = styled.div`
  width: 145px;
  padding: 4px 8px;
`;

const Speaker = styled.div`
  width: 130px;
  padding: 4px 8px;
`;
const Title = styled.div`
  flex: 1;
  padding: 4px 8px;
  padding-right: 12px;
`;

export default ({
  pageContext: { volumeNumbers, volumeNumber, discourses }
}) => {
  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <VolumeWrapper>
        <Volume>
          <h2>Volume {volumeNumber}</h2>
          <DiscourseList>
            {discourses.map(discourse => {
              const event = new window.Date();
              event.setFullYear(parseInt(discourse.date.substr(0, 4), 10));
              event.setMonth(parseInt(discourse.date.substr(5, 7), 10) - 1);
              event.setDate(parseInt(discourse.date.substr(8, 10), 10));
              event.setUTCHours(0);
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
                  <Date title={discourse.date}>
                    {event.toLocaleDateString("default", dateOptions)}
                  </Date>
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
