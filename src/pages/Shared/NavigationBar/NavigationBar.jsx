import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import ActiveNavLink from "../ActiveNavLink/ActiveNavLink";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navbar className="bg-primary bg-opacity-100" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">THE ITALIAN KITCHN</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <ActiveNavLink to="/">Home</ActiveNavLink>
              <ActiveNavLink to="/blog">Blogs</ActiveNavLink>
              {user ? (
                <ActiveNavLink>
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="rounded-5 "
                    style={{ maxWidth: "60px", maxHeight: "30px" }}
                    title={user?.displayName}
                  />
                </ActiveNavLink>
              ) : (
                <ActiveNavLink to="/login">Profile</ActiveNavLink>
              )}
            </Nav>
            <div className="d-flex justify-content-between align-align-items-center gap-3 ">
              <Button className="bg-info">
                <Link to="/register" className="text-decoration-none text-white">
                  CRATE NEW ACCOUNT
                </Link>
              </Button>
              {user ? (
                <Button onClick={handleLogOut} className="bg-info">
                  <Link className="text-decoration-none text-white" to="/">Log Out</Link>
                </Button>
              ) : (
                <Button className="bg-info">
                  <Link to="/login" className="text-decoration-none text-white">
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
