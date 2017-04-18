/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    state: null,
  };

  render() {
    const { title, description, styles, scripts, state, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="referrer" content="unsafe-url" />
            <meta name="referrer" content="origin" />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta name="referrer" content="origin-when-cross-origin" />
            {/*<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />*/}
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />

            <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&amp;subset=latin,vietnamese" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic&amp;subset=latin,vietnamese" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&amp;subset=latin,vietnamese" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/font-awesome-ie7.min.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/uniform-base.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/nivo-slider.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/slick.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/jquery.ui.datepicker.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/lugo.datepicker.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/site.css" rel="stylesheet" type="text/css" />
            <link href="/assets/styles/site-repond.css" rel="stylesheet" />

            <script src="/assets/js/jquery.js" type="text/javascript"></script>
            <script src="/assets/js/jquery-ui.min.js" type="text/javascript"></script>
            <script src="/assets/js/jquery.ui.datepicker-vi-VN.js" type="text/javascript"></script>
            <script src="/assets/js/jquery.easing.1.3.js" type="text/javascript"></script>
            <script src="/assets/js/jquery.mb.browser.min.js" type="text/javascript"></script>
            <script src="/assets/js/jquery.nivo.slider.pack.js" type="text/javascript"></script>
            <script src="/assets/js/jquery.textheight.js" type="text/javascript"></script>
            <link rel="stylesheet" type="text/css"  href="/css/app.css" />
            <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
            <script dangerouslySetInnerHTML={{ __html: this.props.scriptTop }} />
        </head>

        <body>
          <div
            id="app"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: children }}
          />
          {state && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
            />
          )}


          <script src="/assets/js/hoverIntent.js" type="text/javascript"></script>
          <script src="/assets/js/imagesloaded.pkgd.min.js" type="text/javascript"></script>
          <script src="/assets/js/bootstrap.min.js" type="text/javascript"></script>
          <script src="/assets/js/jquery.uniform.min.js" type="text/javascript"></script>
          <script src="/assets/js/isotope.pkgd.min.js" type="text/javascript"></script>
          <script src="/assets/js/slick.min.js" type="text/javascript"></script>
          <script src="/assets/js/superfish.js" type="text/javascript"></script>
          <script src="/assets/js/jquery.panel.mobile.js"></script>
          <script src="/assets/js/jquery.main.js" type="text/javascript"></script>

          {scripts.map(script => <script key={script} src={script} />)}
          {analytics.google.trackingId &&
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
            />
          }
          {analytics.google.trackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />

        </body>
      </html>
    );
  }
}

export default Html;
