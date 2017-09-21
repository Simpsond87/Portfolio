/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import {Link} from 'react-router';
import Bars from 'react-icons/lib/fa/bars';
import FaConnectdevelop from 'react-icons/lib/fa/connectdevelop';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
          <div className="nav">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/Projects" className="navButton">Projects</Link>
            <Link to={"/About"} className="navButton">About</Link>
            <Link to="/Contact" className="navButton">Contact</Link>
            <Link to="/Resume" className="navButton">Resume</Link>
          </div>
        </header>
        <main>
          <div className="displayBox">
            <div className="title">
                <p>&#60; Web Development</p>
                <p>Portfolio &#47;&#62;</p>
            </div>
            <div className="icon">
              <FaConnectdevelop/>
            </div>
            <div className="myName">
              <p>&#35;Daniel Simpson</p>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
