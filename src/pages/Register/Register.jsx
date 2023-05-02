import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mx-auto w-50">
      <Form>
        <div className="d-flex align-items-center justify-content-between">
          <Form.Text className="fs-3 text-black fw-bold">Create an Account</Form.Text>
          <Form.Text className="text-muted fs-6">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
        </div>
        <hr />
        <div className="mb-5">
          <Button variant="info" className="w-100 mb-3 mt-3" type="submit">
            Continue with Google
          </Button>
          <Button variant="info" className="w-100 mb-3" type="submit">
            Continue with Github 
          </Button>
          <hr /> <p className="text-center">or</p> <hr />
        </div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept Terms and Condition" />
        </Form.Group>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="info" type="submit" className="w-50">
            Register
          </Button>
        </div>
        <br />
        <Form.Text className="text-success">We'll never share your email with anyone else.</Form.Text>
        <br />
        <Form.Text className="text-danger">We'll never share your email with anyone else.</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
