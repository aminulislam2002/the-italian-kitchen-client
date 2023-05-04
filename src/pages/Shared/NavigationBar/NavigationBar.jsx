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
          <Navbar.Brand href="#">The Italian Kitchn</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <ActiveNavLink to="/">Home</ActiveNavLink>
              <ActiveNavLink to="/blog">Blogs</ActiveNavLink>
              <ActiveNavLink>
                {user?.displayName} <img src={user?.photoURL} alt="" /> <FaUser></FaUser>
              </ActiveNavLink>
            </Nav>
            <div className="d-flex justify-content-between align-align-items-center gap-3 ">
              <Button className="bg-info">
                <Link to="/register" className="text-decoration-none text-white">
                  Create New Account
                </Link>
              </Button>
              {user ? (
                <Button onClick={handleLogOut} className="bg-info">
                  <Link className="text-decoration-none text-white">Log Out</Link>
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
