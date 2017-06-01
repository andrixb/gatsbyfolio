import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import SiteSidebar from '../components/SiteSidebar';
import SiteTop from '../components/SiteTop';
import './blog.style.scss';

class SiteBlog extends React.Component {
    render() {
        const pageLinks = [];
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path;
                const description = access(page, 'data.description');
                const datePublished = access(page, 'data.date');
                const category = access(page, 'data.category');

                pageLinks.push((
                  <div className="blog__post" key={title}>
                    <time dateTime={moment(datePublished).format('MMMM D, YYYY')}>
                      {moment(datePublished).format('MMMM YYYY')}
                    </time>
                    <span className="blog__category">{category}</span>
                    <h2>
                      <Link to={prefixLink(page.path)}>{title}</Link>
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                    <Link className="readmore" to={prefixLink(page.path)}>Read</Link>
                  </div>
                ));
            }
        });

        return (
          <div className="main__wrapper">
            <Helmet title={config.siteTitle} />
            <SiteTop {...this.props} />
            <SiteSidebar {...this.props} />
            <div className="main__content">
              {pageLinks}
            </div>
          </div>
        );
    }
}

SiteBlog.propTypes = {
    route: PropTypes.object,
};

export default SiteBlog;
