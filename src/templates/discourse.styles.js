import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { color } from "styled-system";
import themed from "@styled-system/css";
import { themeGet as t } from "@styled-system/theme-get";

export const TraversalLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const TraversalLinkText = styled.span(
  themed({
    display: ["none", "inline"]
  })
);

export const TraversalLinkImage = css`
  width: 20px;
  height: 20px;
  display: inline-block;
`;

export const TraversalLinkImageStart = styled.img`
  ${TraversalLinkImage};
  margin-right: ${t("space.2")};
`;

export const TraversalLinkImageEnd = styled.img`
  ${TraversalLinkImage};
  margin-left: ${t("space.2")};
`;

export const SubtleLink = styled(Link)(
  themed({
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    },
    color: "black"
  })
);

export const Discourse = styled.article(
  themed({
    lineHeight: "1.45em",
    marginX: "auto",
    marginBottom: 0,
    marginTop: "14px",
    fontSize: 1,
    maxWidth: 1
  })
);

export const DiscourseNav = styled.nav(
  themed({
    display: "flex",
    marginBottom: 4,
    fontSize: 3
  })
);

export const PreviousDiscourse = styled.div(
  themed({
    whiteSpace: "nowrap",
    height: "20px",
    width: [null, null, "150px"],
    paddingLeft: [4, 3],
    paddingRight: 3
  })
);

export const NextDiscourse = styled.div(
  themed({
    whiteSpace: "nowrap",
    height: "20px",
    display: "flex",
    width: [null, null, "150px"],
    paddingRight: [4, 3],
    paddingLeft: 3,
    flexDirection: "row-reverse"
  })
);

export const CurrentDiscourse = styled.div(
  themed({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
);

export const CitationButton = styled.button(
  themed({
    border: 0,
    background: "none",
    width: "18px",
    height: "18px",
    marginLeft: 2,
    padding: 0
  })
);

export const DiscourseTitle = styled.h2(
  themed({
    padding: 0,
    marginBottom: 3,
    marginLeft: 4,
    textIndent: "-0.8em",
    lineHeight: "1.15em"
  })
);

const pageCss = themed({
  padding: 4,
  paddingBottom: 5,
  paddingTop: 0,
  marginBottom: 4,
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "3px 3px 3px #e5e3d1"
});

export const FirstPage = styled.div`
  ${pageCss}
  display: flex;
`;

export const Page = styled.div(pageCss);

export const Columns = styled.div(
  themed({
    display: ["block", "flex"],
    "& p": {
      margin: 0
    },
    "& p:not(.continued)": {
      textIndent: "1.8em"
    }
  })
);

export const column = themed({
  flex: 1,
  textAlign: "justify",
  borderRight: "0px none",
  paddingLeft: [0, 4],
  paddingRight: [0, 4]
});

export const LeftColumn = styled.div(
  column,
  themed({
    paddingLeft: 0,
    paddingRight: [null, 4],
    borderRight: [null, "1px solid #ddd"]
  })
);

export const RightColumn = styled.div(column);

export const ColumnSeparator = styled.div(
  themed({
    textAlign: "center",
    height: "30px",
    paddingBottom: 2,
    paddingTop: 2,
    display: ["block", "none"]
  })
);

export const ColumnIcon = styled.img(
  themed({
    width: "32px",
    height: "30px",
    lineHeight: "0"
  })
);

export const PageHead = styled.div(
  themed({
    display: "flex",
    marginTop: 4,
    marginBottom: 4,
    marginX: 2
  })
);

export const PageHeader = styled.div(
  themed({
    flex: "1",
    textAlign: "center",
    textTransform: "uppercase"
  })
);

export const EvenPageNumber = styled.div(
  themed({
    width: "40px"
  })
);

export const OddPageNumber = styled.div(
  themed({
    width: "40px",
    textAlign: "right"
  })
);

export const Subtitle = styled.div``;

export const Reporter = styled.div``;

export const SpeakerImage = styled.div(
  themed({
    display: "flex",
    justifyContent: "center",
    marginTop: 3
  })
);

export const Flex = styled.div`
  flex: 1;
`;

export const Citation = styled.div(
  pageCss,
  themed({
    padding: 3
  })
);

export const CitationText = styled.span``;

export const CitationCopyNotice = styled.span(
  themed({
    marginLeft: 2
  })
);
