/*
 *
 * Animations
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import './style.css';
import './styleM.css';

export default class Animations extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Animations" meta={[ { name: 'description', content: 'Description of Animations' }]}/>
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
            <div className="titleAnimations">
              <p>&#60; Animations &#47;&#62;</p>
            </div>
            <div className="changeColorsBox">
              
            </div>
          </div>
        </main>
        <main>

        </main>
      </div>
    );
  }
}

Animations.contextTypes = {
  router: React.PropTypes.object
};
