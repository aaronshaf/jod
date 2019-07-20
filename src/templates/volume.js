import React from "react";
import { Link } from "gatsby";
import { prepareTitle } from "../common.js";
import Header from "./header.js";
import styled from "@emotion/styled";

const VolumeWrapper = styled.div`
  border-top: 1px solid #faf9f3;
  margin-bottom: 24px;
`;

const Volume = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.9rem;
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
  width: 90px;
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
}) => (
  <>
    <Header volumeNumbers={volumeNumbers} volumeNumber={volumeNumber} />
    <VolumeWrapper>
      <Volume>
        <h2>Volume {volumeNumber}</h2>
        <DiscourseList>
          {/* <thead>
        <tr>
          <th>Pages</th>
          <th>Date</th>
          <th>Speaker</th>
          <th>Title</th>
        </tr>
      </thead> */}
          {discourses.map(discourse => {
            return (
              <DiscourseListItem key={discourse.id}>
                <Pages>
                  pp. {discourse.start_page}-{discourse.end_page}
                </Pages>
                <Date>{discourse.date}</Date>
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
  </>
);
