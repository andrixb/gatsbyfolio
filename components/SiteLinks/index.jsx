import React from 'react';
import { config } from 'config';
import './style.scss';
import '../../static/fonts/fontawesome/style.css';

class SiteLinks extends React.Component {
    render() {
        return (
          <div className="sitelinks__links">
            <ul>
              {config.siteTwitterUrl && (
                <li>
                  <a href={config.siteTwitterUrl}>
                    <i className="fa fa-twitter" />
                  </a>
                </li>
              )}
              {config.siteEmailUrl && (
                <li>
                  <a href={`mailto:${config.siteEmailUrl}`}>
                    <i className="fa fa-envelope-o" />
                  </a>
                </li>
              )}
              {config.siteTelegramUrl && (
                <li>
                  <a href={config.siteTelegramUrl}>
                    <i className="fa fa-paper-plane" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        );
    }
}

export default SiteLinks;
