import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const SiteTitleWrapper = styled.div`
  background-color: #052f54;
  padding: 24px 0;
`;

const SiteTitle = styled.h1`
  color: white;
  width: 960px;
  margin: auto;
`;

const Subheading = styled.div`
  color: #919faf;
  width: 960px;
  margin: auto;
`;

const VolumeNumbers = styled.nav`
  display: flex;
  list-style-type: none;
  line-height: 1.4em;
  width: 960px;
  margin: auto;
  padding: 8px 0;
  align-items: center;
`;

const VolumeNumber = styled(Link)`
  flex: 1;
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
  &:active,
  &[aria-current="page"] {
    background: rgb(157, 179, 98);
    background: linear-gradient(
      90deg,
      rgba(157, 179, 98, 1) 0%,
      rgba(153, 175, 91, 1) 35%,
      rgba(139, 165, 70, 1) 100%
    );
  }
  &:active {
    margin-bottom: -2px;
  }
`;

export default class Header extends React.Component {
  render() {
    const { volumeNumbers } = this.props;
    return (
      <header>
        <SiteTitleWrapper>
          <SiteTitle>Journal of Discourses</SiteTitle>
          <Subheading>
            A 26-volume collection of public sermons by Mormon leaders from 1851
            - 1886.
          </Subheading>
        </SiteTitleWrapper>
        <VolumeNumbers>
          {volumeNumbers.map(volumeNumber => (
            <>
              {volumeNumber === 1 && (
                <>
                  <span>Vol.</span>{" "}
                </>
              )}
              <VolumeNumber to={`/${volumeNumber}`} key={volumeNumber}>
                {volumeNumber}
              </VolumeNumber>
            </>
          ))}
        </VolumeNumbers>
      </header>
    );
  }
}
