import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import SiteTop from '../components/SiteTop';
import SiteSidebar from '../components/SiteSidebar';
import './projects.style.scss';

class SiteProjects extends React.Component {
    render() {
        const projectsLinks = [];
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'project') {
                const title = access(page, 'data.title') || page.path;
                const description = access(page, 'data.description');
                const datePublished = access(page, 'data.date');
                const category = access(page, 'data.category');
                const imgSrc = access(page, 'data.featured');
                const path = access(page, 'data.path');

                projectsLinks.push((
                  <div className="projects__post" key={title}>
                    <span className="projects__category">{category}</span>
                    <h2 className="projects__title">
                      <Link to={prefixLink(page.path)}>{title}</Link>
                    </h2>
                    <Link className="projects__link" to={prefixLink(page.path)}>
                      <div className="projects__thumb">
                          <img src={`${path}${imgSrc}`} />
                      </div>
                    </Link>
                  </div>
                ));
            }
        });

        return (
          <div className="main__wrapper">
            <Helmet title={config.siteTitle} />
            <SiteTop {...this.props} />
            <SiteSidebar {...this.props} />
            <div className="projects__container">
              {projectsLinks}
            </div>
          </div>
        );
    }
}

SiteProjects.propTypes = {
    route: PropTypes.object,
};

export default SiteProjects;
