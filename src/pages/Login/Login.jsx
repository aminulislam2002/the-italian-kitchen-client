import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(form, password, email);

    setSuccess(" ");
    setError(" ");

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Successful!");
        navigate(from, { replace: true });
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
    <div className="bg-dark bg-opacity-10">
      <Container className="mx-auto w-50 py-5">
        <Form onSubmit={handleLogIn}>
          <div className="row d-flex align-items-center justify-content-between mb-3">
            <h4 className="col-md-12 col-lg-6 fs-3 text-black fw-bold">Please Login</h4>
            <p className="col-md-12 col-lg-6 text-muted">
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register
              </Link>
            </p>
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
    </div>
  );
};

export default Login;
