import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, createUserWithGoogle, createUserWithGithub, updateUserProfile } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");

  const navigate = useNavigate();

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
    // console.log(form, name, email, photo, password);

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    setSuccess(" ");
    setError(" "); 

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserProfile(result.user, name, photo);
        console.log(createdUser);
        setSuccess("Congratulations! Your account has been successfully created!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(
          "We're sorry, but we were unable to create your account at this time. Please double-check your information and try again."
        );
      });

    form.reset();
  };

  const handleGoogleSingIn = () => {
    createUserWithGoogle(googleProvider)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGithubSingIn = () => {
    createUserWithGithub(githubProvider)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-dark bg-opacity-10">
      <Container className="mx-auto w-50 py-5">
        <div>
          <div className="row d-flex align-items-center justify-content-between">
            <h4 className="col-md-12 col-lg-6 fs-3 text-black fw-bold">Create an Account</h4>
            <p className="col-md-12 col-lg-6 text-muted fs-6">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>
          <hr />
          <div className="mb-5">
            <Button onClick={handleGoogleSingIn} variant="info" className="w-100 mb-3 mt-3" type="submit">
              Continue with Google
            </Button>
            <Button onClick={handleGithubSingIn} variant="info" className="w-100 mb-3" type="submit">
              Continue with Github
            </Button>
            <hr /> <p className="text-center">or, Create an account with email and password.</p> <hr />
          </div>
        </div>

        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="fName" placeholder="Enter first name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lName" placeholder="Enter last name" required />
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
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm" placeholder="Confirm Password" required />
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
          <Form.Text className="text-success">{success}</Form.Text>
          <br />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
