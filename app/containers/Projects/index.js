/*
 *
 * Projects
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Projects" meta={[ { name: 'description', content: 'Description of Projects' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Projects.contextTypes = {
  router: React.PropTypes.object
};
