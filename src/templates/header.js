import React from "react";
import { Link } from "gatsby";

export default class Header extends React.Component {
  render() {
    const { volumeNumbers } = this.props;
    return (
      <header>
        <div className="jod-menu">
          <ul className="volume-numbers">
            {volumeNumbers.map(volumeNumber => (
              <li key={volumeNumber} className="volume-number">
                {volumeNumber === 1 && (
                  <>
                    <span>Vol.</span>{" "}
                  </>
                )}
                <Link to={`/${volumeNumber}`}>{volumeNumber}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
}
