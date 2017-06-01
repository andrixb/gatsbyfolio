import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.scss';

class SiteNav extends React.Component {
  render() {
    return (
      <nav className="sitenav__nav">
        <ul>
          <li>
            <Link to={prefixLink('/projects/')} activeClassName="current"> Projects
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/blog/')} activeClassName="current"> Journal
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/about/')} activeClassName="current"> About me
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/contact/')} activeClassName="current"> Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SiteNav;
