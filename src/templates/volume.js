import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  VolumeWrapper,
  Volume,
  VolumeBar,
  VolumeHeading,
  VolumeTitle,
  VolumeYears,
  VolumeNav,
  VolumeNavSpacer,
  DiscourseList
} from "./volume.styles.js";
import DiscourseListItem from "./DiscourseListItem.js";

export default ({
  pageContext: { volumeNumbers, volumeNumber, discourses }
}) => {
  const nextUrl =
    volumeNumber < 26 && `https://jod.mrm.org/${volumeNumber + 1}`;

  const previousUrl =
    volumeNumber > 1 && `https://jod.mrm.org/${volumeNumber - 1}`;

  const years = discourses
    .map(d => d.date && parseInt(d.date.substr(0, 4), 10))
    .filter(Boolean);
  const y0 = years.length ? Math.min(...years) : null;
  const y1 = years.length ? Math.max(...years) : null;
  const yearRange =
    y0 === null
      ? null
      : y0 === y1
      ? String(y0)
      : `${y0}\u2013${String(y1).slice(2)}`;

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
          <VolumeBar>
            {volumeNumber > 1 ? (
              <VolumeNav
                href={`/${volumeNumber - 1}/`}
                rel="prev"
                title={`Volume ${volumeNumber - 1}`}
              >
                {"\u2039"}&nbsp;Vol.&nbsp;{volumeNumber - 1}
              </VolumeNav>
            ) : (
              <VolumeNavSpacer />
            )}
            <VolumeHeading>
              <VolumeTitle>Volume {volumeNumber}</VolumeTitle>
              {yearRange && <VolumeYears>{yearRange}</VolumeYears>}
            </VolumeHeading>
            {volumeNumber < 26 && (
              <VolumeNav
                href={`/${volumeNumber + 1}/`}
                rel="next"
                title={`Volume ${volumeNumber + 1}`}
              >
                Vol.&nbsp;{volumeNumber + 1}&nbsp;{"\u203a"}
              </VolumeNav>
            )}
          </VolumeBar>
          <DiscourseList>
            {discourses.map(discourse => (
              <DiscourseListItem key={discourse.id} discourse={discourse} />
            ))}
          </DiscourseList>
        </Volume>
      </VolumeWrapper>
    </Layout>
  );
};
