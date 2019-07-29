import { Link } from "gatsby";
import styled from "@emotion/styled";

export const SiteTitleWrapper = styled.div`
  background-color: #052f54;
  padding: 24px;
`;

export const SiteTitle = styled.h1`
  color: white;
  max-width: 960px;
  margin: auto;
  font-variant: small-caps;
  font-family: Times New Roman, serif;
  font-size: 2.2rem;
  font-weight: lighter;
`;

export const SiteTitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Subheading = styled.div`
  color: #919faf;
  max-width: 960px;
  margin: auto;
`;

export const VolumeNumbersWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
  padding-left: 24px;
  padding-right: 24px;
  border-top: 1px solid #fefdfa;
  border-bottom: 1px solid #e3e1ce;
  display: flex;
`;

export const VolumeNumbers = styled.nav`
  max-width: 960px;
  margin: auto;
  display: flex;
  align-items: center;
  list-style-type: none;
  line-height: 1.4em;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 24px;
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
      margin-right: 24px;
    }
  }
  &:active {
    margin-bottom: -1px;
  }
`;
