import React, { Component } from 'react';
import picture1 from './quiz.gif';
import picture2 from './whatschat.gif';
import picture3 from './crystal.gif';
class Portfolio extends Component {
  render() {
    return (
      <div>
        <h2>Portfolio</h2>

        <br />

        <img src={picture1} alt="quizzly" height="200" />
        <img src={picture2} alt="quizzly" height="200" /> 
        <img src={picture3} alt="quizzly" height="200" />
      
      </div>
    );
  }
}

export default Portfolio;