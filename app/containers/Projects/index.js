/*
 *
 * Projects
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import './style.css';
import './styleM.css';

export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Projects" meta={[ { name: 'description', content: 'Description of Projects' }]}/>
          <header>
            <div className="nav">
              <Link to="/" className="navButton">Home</Link>
              <Link to="/Projects" className="navButton">Projects</Link>
              <Link to="/About" className="navButton">About</Link>
              <Link to="/Contact" className="navButton">Contact</Link>
              <Link to="/Resume" className="navButton">Resume</Link>
            </div>
          </header>
          <main>
            <div className="contentBox">
              <div className="titleProjects">
                <p>&#60; My Work &#47;&#62;</p>
              </div>
              <div className="projectsList">
                <Link to="/Animations" className="projectLink">&#35; Animations</Link>
                <Link to="#" className="projectLink">&#35; Chat Site</Link>
                <Link to="#" className="projectLink">&#35; To-Do List</Link>
                <Link to="#" className="projectLink">&#35; Slider</Link>
                <Link to="#" className="projectLink">&#35; Image Layout</Link>
                <Link to="#" className="projectLink">&#35; Photo Upload</Link>
              </div>
            </div>
          </main>
      </div>
    );
  }
}

Projects.contextTypes = {
  router: React.PropTypes.object
};
