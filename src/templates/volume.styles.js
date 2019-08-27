import styled from "@emotion/styled";
import { typography } from "styled-system";

export const VolumeWrapper = styled.div`
  border-top: 1px solid #faf9f3;
  @media (min-width: 641px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Volume = styled.div`
  ${typography};
  max-width: 960px;
  margin: 0 auto;
`;
Volume.defaultProps = { fontSize: 1 };

export const VolumeTitle = styled.h2`
  @media (max-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const DiscourseList = styled.div`
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border: 1px solid #e3e1ce;
  border-spacing: 0;
  clear: both;
  max-width: 100%;
  background-color: white;
  margin-bottom: 16px;
  @media (max-width: 640px) {
    padding: 12px;
    border-left: 0 none;
    border-right: 0 none;
  }
`;

export const DiscourseListItem = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media (min-width: 641px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  &:first-of-type {
    margin-top: 8px;
  }
  &:last-of-type {
    margin-bottom: 8px;
  }
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const Pages = styled.div`
  width: 90px;
  padding: 4px 8px;
  @media (max-width: 640px) {
    order: 4;
    padding-left: 24px;
  }
  @media (min-width: 641px) {
    padding-left: 12px;
  }
`;

export const DateComponent = styled.div`
  width: 145px;
  padding: 4px 8px;
  @media (max-width: 640px) {
    padding-left: 24px;
    order: 3;
  }
`;

export const Speaker = styled.div`
  padding: 4px 8px;
  @media (max-width: 640px) {
    order: 2;
    padding-left: 24px;
  }
  @media (min-width: 641px) {
    width: 130px;
    padding-left: 24px;
  }
`;

export const Title = styled.div`
  flex: 1;
  @media (max-width: 640px) {
    order: 1;
  }
  padding: 4px 8px;
  padding-right: 12px;
`;
