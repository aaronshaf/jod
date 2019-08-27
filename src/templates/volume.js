import React from "react";
import { Link } from "gatsby";
import { prepareTitle } from "../common.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  VolumeWrapper,
  Volume,
  VolumeTitle,
  DiscourseList,
  DiscourseListItem,
  Pages,
  DateComponent,
  Speaker,
  Title
} from "./volume.styles.js";

export default ({
  pageContext: { volumeNumbers, volumeNumber, discourses }
}) => {
  const nextUrl =
    volumeNumber < 26 && `https://jod.mrm.org/${volumeNumber + 1}`;

  const previousUrl =
    volumeNumber > 1 && `https://jod.mrm.org/${volumeNumber - 1}`;

  return (
    <Layout volumeNumbers={volumeNumbers} volumeNumber={volumeNumber}>
      <SEO
        title={`Journal of Discourses, vol. ${volumeNumber}`}
        canonicalUrl={`https://jod.mrm.org/${volumeNumber}`}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
      <VolumeWrapper>
        <Volume>
          <VolumeTitle>Volume {volumeNumber}</VolumeTitle>
          <DiscourseList>
            {discourses.map(discourse => {
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
              return (
                <DiscourseListItem key={discourse.id}>
                  <Pages>
                    pp. {discourse.start_page}-{discourse.end_page}
                  </Pages>
                  <DateComponent title={discourse.date}>
                    {discourse.date &&
                      event &&
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
