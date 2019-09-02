import React from "react";
import { Link } from "gatsby";
import { prepareTitle } from "../common.js";
import {
  DiscourseListItem,
  Pages,
  DateComponent,
  Speaker,
  Title
} from "./volume.styles.js";

export default ({ discourse }) => {
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
};

// export const query = graphql`
//   query($mug: String!) {
//     mug: file(relativePath: { eq: $mug }) {
//       childImageSharp {
//         fixed(width: 160, height: 200) {
//           ...GatsbyImageSharpFixed_withWebp_noBase64
//         }
//       }
//     }
//   }
// `;
