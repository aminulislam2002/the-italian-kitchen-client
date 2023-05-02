import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, password, email);

    setSuccess(" ")
    setError(" ");

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Successful!")
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Email or Password doesn't match! Please try again!");
      });

    form.reset();
  };

  return (
    <Container className="mx-auto w-50">
      <Form onSubmit={handleLogIn}>
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
        <Form.Text className="text-success">{success}</Form.Text>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
