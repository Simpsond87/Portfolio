/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
//import FaHome from 'react-icons/lib/fa/home';

import './style.css';
import './styleM.css';

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
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
            <div className="aboutBox">
              <div className="title">
                <p>&#60;Who Is?&#47;&#62;</p>
              </div>
              <div className="pic">
                <img className="myPic" src={require("../../images/me.jpg")}/>
              </div>
              <div className="aboutMe">
                <p>My name is Daniel Simpson, and I love programming. I am from South Carolina and have lived there my whole life. I have a Bechelor's degree in Math/Computer Science, and have applied my knowledge personally and professionally toward the end goal of becomming a competent computer scientist. My interests lie mainly in web development. I enjoy seeing an idea come to life on screen in a way that is interactive and eye-catching. I also like to play billiards and piano, cook, read, write fiction, and drink coffee. I hope you appreciate my portfolio, and I'll see you in the forums!</p>
              </div>
            </div>
          </main>
      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object
};
