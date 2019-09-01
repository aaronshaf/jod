import { Link } from "gatsby";
import styled from "@emotion/styled";
import themed from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

export const Header = styled.header(
  themed({
    backgroundColor: "blues.1",
    padding: 4
  })
);

export const HeaderInner = styled.div(
  themed({
    margin: "auto",
    alignItems: "center",
    maxWidth: [null, null, 1],
    display: "flex"
  })
);

export const SearchForm = styled.form(
  themed({
    marginLeft: 5,
    display: ["none", "flex"],
    borderRadius: "3px",
    overflow: "hidden"
  })
);

export const SearchQuery = styled.input(
  themed({
    fontSize: 2,
    padding: [2, 3],
    width: [null, "180px", "220px"],
    outline: "0",
    border: 0
  })
);

export const SearchButton = styled.button(
  themed({
    padding: 0,
    backgroundColor: "oranges.0",
    color: "whites.0",
    border: 0
  })
);

export const SearchButtonIcon = styled.img(
  themed({
    width: "28px",
    height: "26px",
    margin: 1,
    marginTop: 2
  })
);

export const SiteTitleWrapper = styled.div`
  flex: 1;
`;

export const SiteTitle = styled.h1(
  themed({
    lineHeight: 0.92,
    margin: "auto",
    maxWidth: 1,
    fontSize: [4, 5],
    fontWeight: "lighter",
    letterSpacing: "1px",
    fontFamily: "Times New Roman, serif",
    fontVariant: "small-caps"
  })
);

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
    paddingLeft: 4,
    paddingRight: 4
  })
);

export const VolumeNumbers = styled.nav(
  themed({
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    lineHeight: "1.4em",
    listStyleType: "none",
    margin: "auto",
    maxWidth: 1,
    paddingRight: 4,
    paddingY: 3,
    width: [null, 1]
  })
);

export const VolumeNumber = styled(Link)(
  props => `
background: linear-gradient(
  90deg,
  ${themeGet("colors.greens.0")(props)} 0%,
  ${themeGet("colors.greens.1")(props)} 35%, 
  ${themeGet("colors.greens.2")(props)} 100%
);
&:active,
&:hover,
&[aria-current="page"] {
  background: linear-gradient(
    90deg,
    ${themeGet("colors.greens.3")(props)} 0%,
    ${themeGet("colors.greens.4")(props)} 35%,
    ${themeGet("colors.greens.5")(props)} 100%
  );
}
`,
  themed({
    "&:active": {
      marginBottom: "-1px"
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    color: "whites.0",
    display: "inline-block",
    flex: 1,
    lineHeight: "1rem",
    marginLeft: "7px",
    minWidth: "16px",
    paddingBottom: "5px",
    paddingTop: "7px",
    paddingX: "5px",
    textAlign: "center",
    textDecoration: "none",
    textShadow: "0 -1px 1px rgba(0, 0, 0, 0.25)",
    whiteSpace: "nowrap"
  })
);
