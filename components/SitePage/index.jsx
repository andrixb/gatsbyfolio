import React from 'react';
import PropTypes from 'prop-types';
import SiteSidebar from '../SiteSidebar';
import SiteTop from '../SiteTop';
import './style.scss';

class SitePage extends React.Component {
    render() {
        const { route } = this.props;
        const post = route.page.data;

        return (
          <div>
            <SiteTop {...this.props} />
            <SiteSidebar {...this.props} />
            <div className="main__content">
              <div className="main__container">
                <div className="page__container">
                  <div className="page__text">
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

SitePage.propTypes = {
    route: PropTypes.object.isRequired,
};

export default SitePage;
