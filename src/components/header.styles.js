import { Link } from "gatsby";
import styled from "@emotion/styled";
import { typography } from "styled-system";
import { themeGet as t } from "@styled-system/theme-get";
import themed from "@styled-system/css";

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
  themed({
    width: [null, null, 1]
  })
);

export const SearchForm = styled.form(
  `
  border-radius: 3px;
  overflow: hidden;
`,
  themed({
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
  themed({
    fontSize: 2,
    padding: [2, 3]
    // marginLeft: 5,
    // display: ["none", "flex"]
  })
);

export const SearchButton = styled.button(
  `
  border: 0 none;
`,
  themed({
    padding: 0,
    backgroundColor: "oranges.0",
    color: "whites.0"
  })
);

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

export const SiteTitleLink = styled(Link)(
  themed({
    textDecoration: "none",
    color: "whites.0"
  })
);

export const Subheading = styled.div(
  themed({
    margin: "auto",
    maxWidth: 1,
    marginTop: 2,
    color: "greys.0",
    fontSize: [0, 1]
  })
);

export const VolumeNumbersWrapper = styled.div(
  themed({
    maxWidth: "100%",
    overflow: "auto",
    display: "flex",
    borderTop: "1px solid",
    borderTopColor: "whites.0",
    borderBottom: "1px solid",
    borderBottomColor: "whites.2",
    paddingLeft: "space.4",
    paddingRight: "space.4"
  })
);

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
