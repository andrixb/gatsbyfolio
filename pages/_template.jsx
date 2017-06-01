import React from 'react';
import PropTypes from 'prop-types';

import '../style/global.scss';

class Template extends React.Component {
    render() {
        const { children } = this.props;

        return (
          <div className="container">
            {children}
          </div>
        );
    }
}

Template.propTypes = {
    children: PropTypes.any,
};

export default Template;
