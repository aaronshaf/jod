import React from "react";
import {
  SiteTitle,
  SiteTitleLink,
  SiteTitleWrapper,
  Subheading,
  VolumeNumber,
  VolumeNumbers,
  VolumeNumbersWrapper
} from "./header.styles.js";

export default class Header extends React.Component {
  render() {
    const { volumeNumbers, siteTitle, siteDescription } = this.props;
    return (
      <header>
        <SiteTitleWrapper>
          <SiteTitle>
            <SiteTitleLink to="/">{siteTitle}</SiteTitleLink>
          </SiteTitle>
          <Subheading>{siteDescription}</Subheading>
        </SiteTitleWrapper>
        {volumeNumbers && (
          <VolumeNumbersWrapper>
            <VolumeNumbers>
              {volumeNumbers.map(volumeNumber => (
                <React.Fragment key={volumeNumber}>
                  {volumeNumber === 1 && (
                    <>
                      <span>Vol.</span>{" "}
                    </>
                  )}
                  <VolumeNumber
                    key={volumeNumber}
                    partiallyActive={true}
                    activeClassName={"active"}
                    to={`/${volumeNumber}`}
                  >
                    {volumeNumber}
                  </VolumeNumber>
                </React.Fragment>
              ))}
            </VolumeNumbers>
          </VolumeNumbersWrapper>
        )}
      </header>
    );
  }
}
