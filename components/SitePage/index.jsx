import React from 'react';
import PropTypes from 'prop-types';
import SiteSidebar from '../SiteSidebar';
import './style.scss';

class SitePage extends React.Component {
    render() {
        const { route } = this.props;
        const post = route.page.data;

        return (
          <div>
            <SiteSidebar {...this.props} />
            <div className="main__content">
              <div className="main__container">
                <div className="main__inner">
                  <div className="blog__page">
                    <div className="text">
                      <h1>{post.title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    </div>
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
