import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { typography, space } from "styled-system";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme.js";
import ss_css from "@styled-system/css";

const Footer = styled.footer`
  ${typography};
  ${space};
  text-align: center;
`;
Footer.defaultProps = { fontSize: 1, margin: 3 };

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
    <ThemeProvider theme={theme}>
      <Global
        styles={ss_css({
          body: {
            bg: "whites.1",
            padding: 0,
            margin: 0,
            fontFamily: '"Lexend Deca", "Trebuchet MS", Arial, Helvetica',
            fontDisplay: "optional"
          },
          a: {
            color: "blues.0"
          }
        })}
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
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
