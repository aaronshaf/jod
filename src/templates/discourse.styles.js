import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { color, typography, space, layout } from "styled-system";
import themeKeys from "@styled-system/css";

export const TraversalLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const TraversalLinkText = styled.span(
  layout,
  themeKeys({
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
  ${space};
`;
TraversalLinkImageStart.defaultProps = { marginRight: 1 };

export const TraversalLinkImageEnd = styled.img`
  ${TraversalLinkImage};
  margin-left: 6px;
`;

export const SubtleLink = styled(Link)`
  ${color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
SubtleLink.defaultProps = { color: "black" };

export const Discourse = styled.article`
  ${typography};
  max-width: 960px;
  margin: 0 auto;
  line-height: 1.45em;
  margin-top: 14px;
`;
Discourse.defaultProps = { fontSize: 1 };

export const DiscourseNav = styled.nav`
  ${typography};
  display: flex;
  margin-bottom: 16px;
`;
DiscourseNav.defaultProps = { fontSize: 3 };

export const PreviousDiscourse = styled.div`
  white-space: nowrap;
  @media (max-width: 960px) {
    height: 20px;
    padding-left: 12px;
    & img {
      margin-right: 8px;
    }
  }
  @media (min-width: 961px) {
    width: 150px;
  }
`;

export const CurrentDiscourse = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CitationButton = styled.button`
  border: 0 none;
  background: none;
  padding: 0;
  margin-left: 6px;
  height: 18px;
  width: 18px;
`;

export const NextDiscourse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  white-space: nowrap;
  @media (max-width: 960px) {
    width: 20px;
    padding-right: 12px;
    & img {
      margin-left: 8px;
    }
  }
  @media (min-width: 961px) {
    width: 150px;
  }
`;

export const DiscourseTitle = styled.h2`
  padding: 0;
  margin-left: 0.8em;
  text-indent: -0.8em;
  margin-bottom: 16px;
  margin-top: 6px;
  line-height: 1.15em;
`;

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
