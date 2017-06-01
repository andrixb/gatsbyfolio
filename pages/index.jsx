import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteSidebar from '../components/SiteSidebar';
import SiteTop from '../components/SiteTop';
import './style.scss';

import profilePic from './photo.jpg';

class SiteIndex extends React.Component {
    render() {
        return (
          <div className="main__wrapper">
            <Helmet title={config.siteTitle} />
            <SiteTop {...this.props} />
            <SiteSidebar {...this.props} />
            <div className="main__content">
              {/* <Link to={prefixLink('/')}>
                <img
                  src={profilePic}
                  width="75" height="75"
                  alt="Profile picture of the author"
                />
              </Link> */}
            </div>
          </div>
        );
    }
}

SiteIndex.propTypes = {
    // route: PropTypes.object,
};

export default SiteIndex;
