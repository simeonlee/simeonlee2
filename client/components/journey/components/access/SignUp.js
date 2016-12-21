import React from 'react';
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap';

const SignUp = props => {
  return (
    <div className={props.specificClass}>
      <h1 className="home-section-title">Sign up</h1>
      <Form action="/signup" method="post">
        <FormGroup controlId="formHorizontalEmail">
          <FormControl className="journey-form-input" type="email" name="email" placeholder="Email" required="true" />
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <FormControl className="journey-form-input" type="password" name="password" placeholder="Password" required="true" />
        </FormGroup>

        <FormGroup className="flex flex-right">
          <Checkbox className="remember-me-checkbox">Remember me</Checkbox>
        </FormGroup>
      </Form>
      <button className="journey-btn journey-btn-auth journey-btn-primary">
        <span>
          Sign up
        </span>
      </button>
      <button className="journey-btn journey-btn-auth journey-btn-facebook">
        <span>
          Log in with Facebook
        </span>
      </button>
      <button className="journey-btn journey-btn-auth journey-btn-amazon">
        <span>
          Log in with Amazon
        </span>
      </button>
    </div>
  )
};

export default SignUp;

//<FormGroup controlId="formHorizontalFullName">
//  <Col sm={12}>
//    <FormControl className="journey-form-input" type="text" name="fullName" placeholder="Full Name" required="true" />
//  </Col>
//</FormGroup>

//<FormGroup controlId="formHorizontalUsername">
//  <Col sm={12}>
//    <FormControl className="journey-form-input" type="text" name="username" placeholder="Username" required="true" />
//  </Col>
//</FormGroup>

// <FormGroup>
//   <Col className="flex flex-center" sm={10}>
//     <Button className="journey-btn journey-btn-primary journey-btn-xl">{/*type="submit"*/}
//       Sign up
//     </Button>
//   </Col>
// </FormGroup>