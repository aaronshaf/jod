import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export const SubtleLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Discourse = styled.article`
  max-width: 960px;
  margin: 0 auto;
  font-size: 0.92rem;
  line-height: 1.45em;
  margin-top: 14px;
`;

export const DiscourseNav = styled.nav`
  display: flex;
  font-size: 1.06rem;
  margin-bottom: 16px;
`;

export const PreviousDiscourse = styled.div`
  width: 150px;
  white-space: nowrap;
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
  width: 150px;
  white-space: nowrap;
  text-align: right;
`;

export const DiscourseTitle = styled.h2`
  padding: 0;
  margin-left: 1.4em;
  text-indent: -1.4em;
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

  & .column {
    flex: 1;
    text-align: justify;
  }

  & .column.left {
    padding-left: 0px;
    @media (min-width: 641px) {
      padding-right: 15px;
      border-right: 1px solid #ddd;
    }
  }

  & .column {
    @media (max-width: 640px) {
      // padding-left: 15px;
    }
    @media (min-width: 641px) {
      padding-left: 15px;
    }
    border-right: 0px none;
  }
`;

export const Columns = styled.div`
  display: flex;
  @media (max-width: 640px) {
    display: block;
  }
  & p {
    margin: 0;
  }
  & p:not(.continued) {
    text-indent: 1.8em;
  }
`;

export const PageHead = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

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
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Flex = styled.div`
  flex: 1;
`;

export const Citation = styled.div`
  ${pageCss}
  padding-bottom: 20px;
`;

export const CitationText = styled.span``;

export const CitationCopyNotice = styled.span`
  margin-left: 6px;
`;
