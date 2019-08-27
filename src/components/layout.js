import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { typography } from "styled-system";

const Footer = styled.footer`
  ${typography};
  text-align: center;
  margin: 22px;
`;
Footer.defaultProps = { fontSize: 1 };

const Layout = ({ children, volumeNumbers, volumeNumber }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          body {
            font-family: "Lexend Deca", "Trebuchet MS", Arial, Helvetica;
            font-display: optional;
            background-color: #f0eee1;
            margin: 0;
          }

          a {
            color: #0066cc;
          }
        `}
      />
      <Header
        volumeNumbers={volumeNumbers}
        volumeNumber={volumeNumber}
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <div>
        <main>{children}</main>
        <Footer>
          A project of{" "}
          <a href="http://www.mrm.org">Mormonism Research Ministry</a>
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
