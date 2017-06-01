import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.scss';

class SiteTop extends React.Component {
    render() {
        const { location } = this.props;
        const isHome = location.pathname === prefixLink('/');

        /* eslint-disable jsx-a11y/img-redundant-alt*/
        const header = (
          <header className="topbar__header">
            { isHome ? (
              <h1 className="topbar__title">
                <Link to={prefixLink('/')}>{config.siteAuthor}</Link>
              </h1>
            ) :
              <h2 className="topbar__title">
                <Link to={prefixLink('/')}>{config.siteAuthor}</Link>
              </h2> }
            <p className="topbar__description">
              {config.siteDescr}
            </p>
          </header>
        );
        /* eslint-enable jsx-a11y/img-redundant-alt*/
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

SiteTop.propTypes = {
    location: PropTypes.object,
};

export default SiteTop;
