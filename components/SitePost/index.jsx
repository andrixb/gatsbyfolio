import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ReadNext from '../ReadNext';
import './style.scss';
import '../../static/css/highlight.css';

class SitePost extends React.Component {
    render() {
        const { route } = this.props;
        const post = route.page.data;
        const home = (
          <div>
            <Link className="gohome" to={prefixLink('/')}>All Articles</Link>
          </div>
        );

        return (
          <div>
            {home}
            <div className="post__container">
              <h1 className="post__title">{post.title}</h1>
              <div className="post__text">
                <div className="post__content" dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </div>
            {/* <div className="date-published">
              <em>Published {moment(post.date).format('D MMM YYYY')}</em>
            </div> */}
            <footer className="footer">
              <hr />
              <p>
                {config.siteDescr}
                <a href={config.siteTwitterUrl}>
                  <br /> <strong>{config.siteAuthor}</strong> on Twitter
                </a>
              </p>
            </footer>
          </div>
        );
    }
}

SitePost.propTypes = {
    route: PropTypes.object.isRequired,
};

export default SitePost;
