import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {} = useContext(AuthContext);
  

  return (
    <Container className="mx-auto w-50">
      <Form>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Form.Text className="fs-3 text-black fw-bold">Please Login</Form.Text>
          <Form.Text className="text-muted">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </Form.Text>
        </div>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="info" type="submit" className="w-50">
            Login
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

export default Login;
