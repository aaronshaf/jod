import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { color, typography, space, layout } from "styled-system";
import themed from "@styled-system/css";
import { themeGet as t } from "@styled-system/theme-get";

export const TraversalLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const TraversalLinkText = styled.span(
  layout,
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

export const SubtleLink = styled(Link)`
  ${color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
SubtleLink.defaultProps = { color: "black" };

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
    marginTop: 2,
    marginBottom: 3,
    marginLeft: 4,
    textIndent: "-0.8em",
    lineHeight: "1.15em"
  })
);

const pageCss = css`
  padding: 25px;
  padding-top: 20px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 3px 3px 3px #e5e3d1;
`;

export const FirstPage = styled.div`
  ${pageCss}
  display: flex;
`;

export const Page = styled.div`
  ${pageCss}
`;

export const Columns = styled.div`
  display: flex;
  @media (max-width: 740px) {
    display: block;
  }
  & p {
    margin: 0;
  }
  & p:not(.continued) {
    text-indent: 1.8em;
  }
`;

export const column = css`
  flex: 1;
  text-align: justify;
  border-right: 0px none;
  @media (min-width: 741px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const LeftColumn = styled.div`
  ${column};
  padding-left: 0px;
  @media (min-width: 741px) {
    padding-right: 15px;
    border-right: 1px solid #ddd;
  }
`;

export const RightColumn = styled.div`
  ${column};
`;

export const ColumnSeparator = styled.div`
  ${space};
  ${layout};
  text-align: center;
  height: 30px;
`;
ColumnSeparator.defaultProps = {
  paddingBottom: 1,
  paddingTop: 1,
  display: ["block", "none"]
};

export const ColumnIcon = styled.img`
  width: 32px;
  height: 30px;
  line-height: 0;
`;

export const PageHead = styled.div`
  ${space};
  display: flex;
`;
PageHead.defaultProps = { marginBottom: 3 };

export const PageHeader = styled.div`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
`;

export const EvenPageNumber = styled.div`
  width: 40px;
`;

export const OddPageNumber = styled.div`
  width: 40px;
  text-align: right;
`;

export const Subtitle = styled.div``;

export const Reporter = styled.div``;

export const SpeakerImage = styled.div`
  ${space};
  display: flex;
  justify-content: center;
`;
SpeakerImage.defaultProps = { marginTop: 3 };

export const Flex = styled.div`
  flex: 1;
`;

export const Citation = styled.div(pageCss, space);
Citation.defaultProps = { padding: 3 };

export const CitationText = styled.span();

export const CitationCopyNotice = styled.span(space);
CitationCopyNotice.defaultProps = { marginLeft: 2 };
