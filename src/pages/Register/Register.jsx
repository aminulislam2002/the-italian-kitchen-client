import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState(" ");

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const name = `${fName} ${lName}`;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(form, name, email, photo, password);

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    setError(" ");

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    form.reset();
  };

  return (
    <Container className="mx-auto w-50">
      <Form onSubmit={handleCreateUser}>
        <div className="d-flex align-items-center justify-content-between">
          <Form.Text className="fs-3 text-black fw-bold">Create an Account</Form.Text>
          <Form.Text className="text-muted fs-6">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
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
        <div className="d-flex gap-5">
          <Form.Group className="mb-3 w-50" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="fName" placeholder="Enter first name" required />
          </Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lName" placeholder="Enter last name" required />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
        </Form.Group>
        <div className="d-flex gap-5">
          <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm" placeholder="Confirm Password" required />
          </Form.Group>
        </div>
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
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
