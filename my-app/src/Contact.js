import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';

 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Connect With Me!</h2>
        <br />
        <p>The easiest thing to do is follow me on LinkedIn:
        <a href="https://www.linkedin.com/in/josh-boepple-677118180/"> <br /> Josh Boepple</a>.
        </p>

        <Form>
  <Form.Group controlId="formGroupName">
    <Form.Label>Name: </Form.Label>
    <Form.Control type="name" placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email: </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupMessage">
    <Form.Label>Message: </Form.Label>
    <Form.Control type="text" placeholder="Enter a message" />
  </Form.Group>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
      </div>
    );
  }
}
 
export default Contact;