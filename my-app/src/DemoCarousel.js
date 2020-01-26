import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="crystal.gif" alt="" height="300" />
                  <p className="legend">Crystal Collector</p>
              </div>
              <div>
                  <img src="quiz.gif" alt="" height="300" />
                  <p className="legend">Quizzly</p>
              </div>
              <div>
                  <img src="whatschat.gif" alt="" height="300" />
                  <p className="legend">WhatsChat App</p>
              </div>
          </Carousel>
          
      );

      
  }

}

  
  export default DemoCarousel;