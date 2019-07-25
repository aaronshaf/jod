import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import styled from "@emotion/styled";

const Footer = styled.footer`
  text-align: center;
  font-size: 0.86rem;
  margin: 22px;
`;

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
