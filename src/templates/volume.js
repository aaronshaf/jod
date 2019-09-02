import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  VolumeWrapper,
  Volume,
  VolumeTitle,
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
            {discourses.map(discourse => (
              <DiscourseListItem key={discourse.id} discourse={discourse} />
            ))}
          </DiscourseList>
        </Volume>
      </VolumeWrapper>
    </Layout>
  );
};
