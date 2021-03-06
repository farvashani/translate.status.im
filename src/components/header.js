import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="head">
          <h1><FormattedMessage id="header.main-1" defaultMessage="Translate Status" />< br />
          <FormattedMessage id="header.main-2" defaultMessage="into Your Language" /></h1>
            <div>
              <p><FormattedMessage id="header.status" defaultMessage="Status" /><FormattedMessage id="header.status-explanation-1" defaultMessage=" is completely open source and made by contributors all over the world."/>< br />
              <FormattedMessage id="header.status-explanation-2" defaultMessage="Your translations can help more people utilize our secure, censorship-resistant service" /></p>
            </div>
            <div className="cta-margin-top">
              <p><a href="#tutorial"><FormattedMessage id="header.howtocontribute" defaultMessage="How to contribute?" /></a></p>
            </div>            
        </div>
      </header>
      
    );
  }
}


export default Header;
