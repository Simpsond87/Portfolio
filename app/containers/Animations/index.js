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
  constructor() {
    super();
    this.state = {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
      ],
      hands: [
        'hand1.gif',
        'hand2.gif',
        'hand3.gif',
        'hand4.gif',
        'hand5.gif',
        'hand6.gif',
        'hand7.gif',
        'hand8.gif'
      ],
      activeIndex: 0,
      activeIndex2: 0,
      pos: 0,
      interval: null,
      interval2: null
    }
  }

  renderColor = (event) => {
    let colors = this.state.colors;
    let activeIndex = this.state.activeIndex;

    for(let i = 0; i < colors.length; i++)
    {
      if(i === activeIndex)
      {
        this.refs.colorBox.style.background = colors[i];
      }
    }
  }

  nextColor = () => {
    let colors = this.state.colors;
    let activeIndex = this.state.activeIndex;

    if(activeIndex + 1 < colors.length)
    {
      this.setState({
        activeIndex: activeIndex + 1,
      })
    }
    else
    {
      this.setState({
        activeIndex: 0,
      })
    }
    this.renderColor();
  }

  moveBox = () => {
    let _this = this;
    clearInterval(this.state.interval);
    let interval = setInterval(function() {
        _this.frame();
      }, 10);
      this.setState({
        interval: interval
      })
  }

  frame = () => {
    if(this.state.pos == 350)
    {
      this.refs.box.style.top = '0px';
      this.refs.box.style.left = '0px';
      clearInterval(this.state.interval);
      this.setState({
        pos: 0
      })
    }
    else
    {
      this.state.pos++;
      this.refs.box.style.top = this.state.pos +'px';
      this.refs.box.style.left = this.state.pos +'px';
    }
  }

  animateHands = () => {
    let _this = this;
    let interval2 = setInterval(function() {
        _this.nextHand();
      }, 200);
      this.setState({
        interval2: interval2
      })
  }

  stopAnimateHands = () => {
    clearInterval(this.state.interval2);
  }

  renderHandImage = () => {
    return this.state.hands[this.state.activeIndex2];
  }

  nextHand = () => {
    let hands = this.state.hands;
    let activeIndex2 = this.state.activeIndex2;
    if(activeIndex2 + 1 < hands.length)
    {
      this.setState({
        activeIndex2: activeIndex2 + 1,
      })
    }
    else
    {
      this.setState({
        activeIndex2: 0,
      })
    }
  //  this.renderHandImage();
  //  this.forceUpdate();
  }

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
            <div>
              <h2 className="bounce">Bounce</h2>
            </div>
            <br/>
            <div className="colorBoxContainer">
              <div className="colorBox" ref="colorBox">
              </div>
              <div className="changeColorsBox">
                <button className="colorButton" onClick={this.nextColor}>Change Colors</button>
              </div>
            </div>
            <br/>
            <div className="boxSlideContainer">
                <button className="boxButton" onClick={this.moveBox}>Move Box</button>
              <div className="boxSlideBox">
                <div className="box" ref="box"></div>
              </div>
            </div>
            <br/>
            <div className="handContainer">
              <p>Scroll over the hand to make it wave</p>
              <img className="handImage" src={require('../../images/' + this.renderHandImage())} onMouseOver={this.animateHands} onMouseOut={this.stopAnimateHands}/>
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
