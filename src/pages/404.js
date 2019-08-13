import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import css from "@emotion/css/macro";

const NotFoundPage = props => {
  const volumeNumbers = [...Array(26).keys()].map(x => x + 1);
  return (
    <Layout volumeNumbers={volumeNumbers}>
      <SEO title="404: Not found" />
      <div
        css={css`
          max-width: 960px;
          margin: 0 auto;
          font-size: 0.92rem;
        `}
      >
        <h1>Not found</h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
