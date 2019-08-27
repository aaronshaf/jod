import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import css from "@emotion/css/macro";
import styled from "@emotion/styled";
import { typography } from "styled-system";

const NotFoundMessage = styled.main`
  ${typography};
`;
NotFoundMessage.defaultProps = { fontSize: 1 };

const NotFoundPage = props => {
  const volumeNumbers = [...Array(26).keys()].map(x => x + 1);
  return (
    <Layout volumeNumbers={volumeNumbers}>
      <SEO title="404: Not found" />
      <NotFoundMessage
        css={css`
          max-width: 960px;
          margin: 0 auto;
        `}
      >
        <h1>Not found</h1>
      </NotFoundMessage>
    </Layout>
  );
};

export default NotFoundPage;
