import { Link } from "gatsby";
import styled from "@emotion/styled";
import { typography } from "styled-system";
import { themeGet as t } from "@styled-system/theme-get";
import themeKeys from "@styled-system/css";

export const Header = styled.header`
  background-color: ${t("colors.blues.1")};
  padding: ${t("space.4")};
`;

export const HeaderInner = styled.div(
  `
  display: flex;
  margin: auto;
  align-items: center;
`,
  themeKeys({
    width: [null, null, 1]
  })
);

export const SearchForm = styled.form(
  `
  border-radius: 3px;
  overflow: hidden;
`,
  themeKeys({
    marginLeft: 5,
    display: ["none", "flex"]
  })
);

export const SearchQuery = styled.input(
  `
  border: 0 none;
  outline: 0;
  width: 200px;
`,
  themeKeys({
    fontSize: 2,
    padding: [2, 3]
    // marginLeft: 5,
    // display: ["none", "flex"]
  })
);

export const SearchButton = styled.button`
  background-color: ${t("colors.oranges.0")};
  border: 0 none;
  padding: 0;
`;

export const SearchButtonIcon = styled.img`
  width: 28px;
  height: 26px;
  margin: 2px;
  margin-top: 4px;
`;

export const SiteTitleWrapper = styled.div`
  flex: 1;
`;

export const SiteTitle = styled.h1`
  ${typography};
  color: white;
  max-width: 960px;
  margin: auto;
  font-variant: small-caps;
  font-family: Times New Roman, serif;
  letter-spacing: 1px;
  font-weight: lighter;
  line-height: ${t("fontSizes.4")};
`;
SiteTitle.defaultProps = { fontSize: [4, 5] };

export const SiteTitleLink = styled(Link)`
  color: ${t("colors.whites.0")};
  text-decoration: none;
`;

export const Subheading = styled.div`
  ${typography};
  color: ${t("colors.greys.0")};
  max-width: 960px;
  margin: auto;
  margin-top: ${t("space.2")};
`;
Subheading.defaultProps = { fontSize: [0, 1] };

export const VolumeNumbersWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
  border-top: 1px solid ${t("colors.whites.0")};
  border-bottom: 1px solid ${t("colors.whites.2")};
  display: flex;
  padding-left: ${t("space.4")};
  padding-right: ${t("space.4")};
`;

export const VolumeNumbers = styled.nav`
  max-width: 960px;
  @media (min-width: 641px) {
    width: 960px;
  }
  margin: auto;
  display: flex;
  align-items: center;
  list-style-type: none;
  line-height: 1.4em;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 24px;
  box-sizing: border-box;
`;

export const VolumeNumber = styled(Link)`
  flex: 1;
  min-width: 16px;
  margin-left: 7px;
  white-space: nowrap;
  text-align: center;
  flex: 1;
  line-height: 1rem;
  background: rgb(179, 205, 107);
  background: linear-gradient(
    90deg,
    rgba(179, 205, 107, 1) 0%,
    rgba(177, 204, 104, 1) 35%,
    rgba(166, 196, 82, 1) 100%
  );
  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
  padding: 7px 5px 5px;
  display: inline-block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: rgb(157, 179, 98);
    background: linear-gradient(
      90deg,
      rgba(157, 179, 98, 1) 0%,
      rgba(153, 175, 91, 1) 35%,
      rgba(139, 165, 70, 1) 100%
    );
  }
  &.active,
  &:active,
  &[aria-current="page"] {
    background: rgb(157, 179, 98);
    background: linear-gradient(
      90deg,
      rgba(157, 179, 98, 1) 0%,
      rgba(153, 175, 91, 1) 35%,
      rgba(139, 165, 70, 1) 100%
    );

    &:last-of-type {
      // margin-right: 24px;
    }
  }
  &:active {
    margin-bottom: -1px;
  }
`;
