/*
 *
 * Resume
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import './style.css';
import './styleM.css';

export default class Resume extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Resume" meta={[ { name: 'description', content: 'Description of Resume' }]}/>
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
          <div className="resumeContentBox">
            <div className="titleResume">
              <p>&#60; My Mark &#47;&#62;</p>
            </div>
            <div className="resumePics">
              <img className="resume" src={require("../../images/resume-2.jpg")}/>
              <img className="resume" src={require("../../images/resume-1.jpg")}/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Resume.contextTypes = {
  router: React.PropTypes.object
};
