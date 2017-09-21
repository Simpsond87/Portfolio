/*
 *
 * Resume
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Resume extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Resume" meta={[ { name: 'description', content: 'Description of Resume' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Resume.contextTypes = {
  router: React.PropTypes.object
};
