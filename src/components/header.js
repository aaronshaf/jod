import React, { useLayoutEffect, useRef } from "react";
import { useLocalStorageState } from "react-storage-hooks";
import {
  SiteTitle,
  SiteTitleLink,
  SiteTitleWrapper,
  Subheading,
  VolumeNumber,
  VolumeNumbers,
  VolumeNumbersWrapper
} from "./header.styles.js";

export default function Header(props) {
  const { volumeNumbers, volumeNumber, siteTitle, siteDescription } = props;

  const [scrollLeft, setScrollState] = useLocalStorageState(
    "volumeWrapperScrollLeft",
    0
  );

  const wrapperEl = useRef(null);

  useLayoutEffect(() => {
    wrapperEl.current.scrollLeft = scrollLeft;
  }, []);

  const handleScroll = event => {
    // console.debug(event.target.scrollLeft);
    setScrollState(event.target.scrollLeft);
  };

  return (
    <header>
      <SiteTitleWrapper>
        <SiteTitle>
          <SiteTitleLink to="/">{siteTitle}</SiteTitleLink>
        </SiteTitle>
        <Subheading>{siteDescription}</Subheading>
      </SiteTitleWrapper>
      {volumeNumbers && (
        <VolumeNumbersWrapper ref={wrapperEl} onScroll={handleScroll}>
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
