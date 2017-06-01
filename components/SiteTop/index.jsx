import React from 'react';

import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.scss';

class SiteTop extends React.Component {
    render() {
        const header = (
          <header className="topbar__header">
            <h1 className="topbar__title">
              <Link to={prefixLink('/')}>{config.siteAuthor}</Link>
            </h1>
            <p className="topbar__description">
              {config.siteDescr}
            </p>
          </header>
        );
        return (
          <div className="topbar__container">
            {header}
            <div className="topbar__inner">
              <SiteNav {...this.props} />
              <SiteLinks {...this.props} />
            </div>
          </div>
        );
    }
}

export default SiteTop;
