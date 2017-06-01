import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.scss';


class SiteSidebar extends React.Component {
    render() {
        const { location } = this.props;
        const isHome = location.pathname === prefixLink('/');

        /* eslint-disable jsx-a11y/img-redundant-alt*/
        const header = (
          <header className="sidebar__header">
            { isHome ? (
              <h1 className="sidebar__title">
                <Link to={prefixLink('/')}>{config.siteAuthor}</Link>
              </h1>
            ) :
              <h2 className="sidebar__title">
                <Link to={prefixLink('/')}>{config.siteAuthor}</Link>
              </h2> }
            <p className="sidebar__description">
              {config.siteDescr}
            </p>
          </header>
        );
        /* eslint-enable jsx-a11y/img-redundant-alt*/
        return (
          <div className="sidebar__container">
            {header}
            <div className="sidebar__inner">
              <SiteNav {...this.props} />
            </div>
            <footer className="sidebar__footer">
              <SiteLinks {...this.props} />
              <p className="copyright">
                &copy; All rights reserved.
              </p>
            </footer>
          </div>
        );
    }
}

SiteSidebar.propTypes = {
    location: PropTypes.object,
};

export default SiteSidebar;
