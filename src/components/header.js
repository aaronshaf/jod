import React, { useLayoutEffect, useRef } from "react";
import { useLocalStorageState } from "react-storage-hooks";
import {
  Header,
  HeaderInner,
  SearchForm,
  SearchButton,
  SearchQuery,
  SiteTitle,
  SiteTitleLink,
  SiteTitleWrapper,
  Subheading,
  VolumeNumber,
  VolumeNumbers,
  VolumeNumbersWrapper
} from "./header.styles.js";

export default function HeaderComponent(props) {
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
    setScrollState(event.target.scrollLeft);
  };

  return (
    <>
      <Header>
        <HeaderInner>
          <SiteTitleWrapper>
            <SiteTitle>
              <SiteTitleLink to="/">{siteTitle}</SiteTitleLink>
            </SiteTitle>
            <Subheading>{siteDescription}</Subheading>
          </SiteTitleWrapper>
          <div>
            <SearchForm action="http://www.google.com/search" method="get">
              <input type="hidden" name="domains" value="jod.mrm.org" />
              <input type="hidden" name="sitesearch" value="jod.mrm.org" />
              <SearchQuery type="text" name="q" className="query" />
              <SearchButton className="go" type="submit" title="Search">
                Search
              </SearchButton>
            </SearchForm>
          </div>
        </HeaderInner>
      </Header>
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
    </>
  );
}
