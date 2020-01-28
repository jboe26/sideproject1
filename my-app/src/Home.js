import React, { Component } from "react";
import img from './demoday.jpg';
import { Button } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HI</h2>
                <br />
                <h2>I'M JOSH BOEPPLE</h2>
                <br />
                <h4>Full Stack Web Developer | Website Creator</h4>
                <br />
                <div id="demoday">
                    <img src={img} alt="demo day" height="300" /> <br /> <br />
                    <p>
                        I am pursuing a career in web development and design.
                    I completed a Certificate program through UNC Charlotte. 
                    I have a passion for working with computers including designing websites and coding. 
                    I enjoy the outdoors and spending time with friends and family. <br /> <br />
                    If you choose me, the first round of coffee is on me!</p>

                    <Button href="/JOSHResume.docx">Download my resume</Button>
                </div>
            </div>
        );
    }
}

export default Home;