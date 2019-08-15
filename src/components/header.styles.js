import { Link } from "gatsby";
import styled from "@emotion/styled";

export const Header = styled.header`
  background-color: #052f54;
  padding: 24px;
`;

export const HeaderInner = styled.div`
  display: flex;
  @media (min-width: 960px) {
    width: 960px;
    margin: auto;
  }
  align-items: center;
`;

export const SearchForm = styled.form`
  background-color: white;
  border-radius: 0px;
  overflow: hidden;
  @media (max-width: 640px) {
    display: none;
  }
  display: flex;
`;

export const SearchQuery = styled.input`
  border: 0 none;
  outline: 0;
  font-size: 1rem;
  width: 200px;
  padding: 6px;
`;

export const SearchButton = styled.button`
  background-color: #f1ae46;
  color: white;
  border: 0 none;
  padding: 0;
`;

export const SearchButtonIcon = styled.img`
  width: 26px;
  height: 26px;
  margin: 2px;
`;

export const SiteTitleWrapper = styled.div`
  flex: 1;
`;

export const SiteTitle = styled.h1`
  color: white;
  max-width: 960px;
  margin: auto;
  font-variant: small-caps;
  font-family: Times New Roman, serif;
  letter-spacing: 1px;
  font-size: 2.2rem;
  font-weight: lighter;
  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

export const SiteTitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Subheading = styled.div`
  color: #b7c5d7;
  max-width: 960px;
  margin: auto;
  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
  @media (min-width: 641px) {
    font-size: 0.9rem;
  }
`;

export const VolumeNumbersWrapper = styled.div`
  background-color: #f0eee1;
  max-width: 100%;
  overflow: auto;
  border-top: 1px solid #fefdfa;
  border-bottom: 1px solid #e3e1ce;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
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
