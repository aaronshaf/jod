import styled from "@emotion/styled";
import themed from "@styled-system/css";

export const VolumeWrapper = styled.div(
  themed({
    borderTop: "1px solid",
    borderTopColor: "whites.4",
    paddingX: [0, 4]
  })
);

export const Volume = styled.div(
  themed({
    maxWidth: 1,
    marginX: "auto",
    fontSize: 2
  })
);

const MOBILE = "@media screen and (max-width: 39.99em)";
const MUTED = "#5a5a50";

// Compact bar: previous volume, title + years, next volume. Sticky on phones.
export const VolumeBar = styled.div(
  themed({
    display: "flex",
    alignItems: ["center", "baseline"],
    position: ["sticky", "static"],
    top: 0,
    zIndex: 5,
    minHeight: ["52px", null],
    paddingX: [3, 0],
    backgroundColor: ["whites.1", "transparent"],
    borderBottom: ["1px solid", "none"],
    borderBottomColor: "whites.2"
  })
);

export const VolumeHeading = styled.div(
  themed({
    flex: 1,
    order: [1, 0],
    textAlign: ["center", "left"],
    minWidth: "0px",
    display: ["block", "flex"],
    alignItems: "baseline",
    [MOBILE]: { lineHeight: 1.2 }
  })
);

export const VolumeTitle = styled.h2(
  themed({
    display: "block",
    margin: 0,
    fontSize: [4, null],
    fontWeight: "bold",
    lineHeight: 1.2,
    "@media screen and (min-width: 40em)": { fontSize: "1.5em", marginY: "0.83em" }
  })
);

export const VolumeYears = styled.span(
  themed({
    display: "block",
    color: MUTED,
    fontSize: [0, 1],
    marginLeft: [0, 3],
    letterSpacing: "0.02em"
  })
);

export const VolumeNav = styled.a(
  themed({
    display: "inline-flex",
    alignItems: "center",
    boxSizing: "border-box",
    minWidth: ["64px", null],
    minHeight: ["44px", null],
    paddingX: [2, 3],
    color: "blues.1",
    fontSize: [1, 1],
    textDecoration: "none",
    whiteSpace: "nowrap",
    order: [0, 1],
    justifyContent: ["flex-start", "flex-end"],
    "&:hover": { textDecoration: "underline" },
    "&:focus-visible": { outline: "2px solid", outlineColor: "blues.0", outlineOffset: "-2px" },
    "&[rel~=next]": { order: [2, 2], justifyContent: "flex-end" },
    [MOBILE]: { marginLeft: "-8px", "&[rel~=next]": { marginLeft: 0, marginRight: "-8px" } }
  })
);

export const VolumeNavSpacer = styled.span(
  themed({
    display: ["inline-block", "none"],
    minWidth: "64px",
    order: [0, 1]
  })
);

export const DiscourseList = styled.div(
  themed({
    backgroundColor: "whites.0",
    borderRadius: "2px",
    borderColor: "whites.2",
    borderStyle: "solid",
    borderLeftWidth: [0, "1px"],
    borderRightWidth: [0, "1px"],
    borderTopWidth: "1px",
    borderTopBottom: "1px",
    clear: "both",
    marginBottom: 4,
    maxWidth: "100%",
    padding: [0, 0]
  })
);

export const DiscourseListItem = styled.div(
  themed({
    display: "flex",
    flexDirection: "row",
    flexWrap: ["wrap", "nowrap"],
    alignItems: ["baseline", "stretch"],
    position: "relative",
    marginY: [0, 3],
    paddingX: [3, 0],
    paddingY: [0, 0],
    "&:hover": {
      backgroundColor: "whites.5"
    },
    [MOBILE]: {
      boxSizing: "border-box",
      minHeight: "44px",
      paddingTop: "12px",
      paddingBottom: "11px",
      borderTop: "1px solid",
      borderTopColor: "whites.1",
      "&:first-of-type": { borderTopColor: "transparent" },
      "&:active": { backgroundColor: "whites.1" }
    }
  })
);

export const Pages = styled.div(
  themed({
    width: [null, "90px"],
    paddingLeft: [0, 4],
    paddingRight: [0, 3],
    paddingY: [0, 2],
    order: [3, 0],
    [MOBILE]: {
      color: MUTED,
      fontSize: 1,
      whiteSpace: "nowrap",
      lineHeight: 1.5
    }
  })
);

export const DateComponent = styled.div(
  themed({
    width: [null, "145px"],
    paddingX: [0, 3],
    paddingY: [0, 2],
    order: [2, 1],
    [MOBILE]: {
      color: MUTED,
      fontSize: 1,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      "&::after": { content: '"\\00b7"', margin: "0 5px" },
      "&:empty": { display: "none" }
    }
  })
);

export const Speaker = styled.div(
  themed({
    paddingX: [0, 3],
    paddingY: [0, 2],
    order: [1, null],
    width: [null, "140px"],
    [MOBILE]: {
      color: MUTED,
      fontSize: 1,
      lineHeight: 1.5,
      minWidth: "0px",
      "&::after": { content: '"\\00b7"', margin: "0 5px" }
    }
  })
);

export const Title = styled.div(
  themed({
    order: [0, 3],
    flex: [null, 1],
    paddingY: [0, 2],
    paddingLeft: [0, 0],
    paddingRight: [0, 4],
    [MOBILE]: {
      flexBasis: "100%",
      marginBottom: "3px",
      fontSize: 3,
      lineHeight: 1.35,
      overflowWrap: "break-word",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "5",
      overflow: "hidden",
      a: {
        color: "blues.1",
        textDecoration: "none",
        "&::after": { content: '""', position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
        "&:focus-visible": { outline: "2px solid", outlineColor: "blues.0", outlineOffset: "-2px" }
      }
    }
  })
);
