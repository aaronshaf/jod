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
    const {
      volumeNumbers,
      volumeNumber,
      siteTitle,
      siteDescription
    } = this.props;
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
              {volumeNumbers.map(volumeNumber_ => (
                <React.Fragment key={volumeNumber_}>
                  {volumeNumber_ === 1 && (
                    <>
                      <span>Vol.</span>{" "}
                    </>
                  )}
                  <VolumeNumber
                    key={volumeNumber_}
                    partiallyActive={volumeNumber != null}
                    activeClassName={"active"}
                    to={`/${volumeNumber_}/`}
                    title={`Volume ${volumeNumber_}`}
                  >
                    {volumeNumber_}
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
