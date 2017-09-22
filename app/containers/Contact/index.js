/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import FaHome from 'react-icons/lib/fa/home';
import FaPhone from 'react-icons/lib/fa/phone';
import FaKeyboardO from 'react-icons/lib/fa/keyboard-o';
//import FaLaptop from 'react-icons/lib/fa/laptop';

import './style.css';
import './styleM.css';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>
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
            <div className="contactBox">
              <div className="title">
                <p>&#60;Get In Touch&#47;&#62;</p>
              </div>
              <div className="iconContact">
                <FaHome />
              </div>
              <br/>
              <div className="contactInfo">
                <p>
                  <span>
                    <FaKeyboardO className="keyboardIcon"/>
                  </span>
                  &nbsp;&nbsp;simpson.d87@gmail.com</p>
                <p>
                  <span>
                    <FaPhone className="phoneIcon"/>
                  </span>
                  &nbsp;803.270.8145</p>
              </div>
            </div>
          </main>
      </div>
    );
  }
}

Contact.contextTypes = {
  router: React.PropTypes.object
};
