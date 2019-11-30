// TODO fix accessibility
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import ButtonLink from './buttonLink';
import Translate from './translate';

export default class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showing: true });
    }, 2 * 1000);
  }

  render() {
    const { showing } = this.state;
    return (
      <div className={`warning-container ${!showing ? 'hidden' : ''}`}>
        <div className="warning-overlay">
          <div
            className="close-button"
            onClick={() => this.setState({ showing: false })}
            role="button"
          >
            ╳
          </div>
          <h3>
            <Translate text="hardForkAlert" />
          </h3>
          <div className="action">
            <ButtonLink
              text={<Translate text="upgrade" />}
              to="https://ecips.ethereumclassic.org/ECIPs/ecip-1056"
              icon="angle-right"
            />
          </div>
          <p>
            <Translate text="aghartaWarning" />
          </p>
        </div>
      </div>
    );
  }
}
