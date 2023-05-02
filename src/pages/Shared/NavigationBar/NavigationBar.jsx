import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">The Italian Kitchn</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Blogs</Nav.Link>
              <Nav.Link href="#action2">{user.displayName}</Nav.Link>
              <Nav.Link href="#action3">
                <FaUser></FaUser>
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-between align-align-items-center gap-3 ">
              <Button variant="info">
                <Link to="/register" className="text-decoration-none">Register</Link>
              </Button>
              {user ? (
                <Button variant="info">
                  <Link className="text-decoration-none">Log Out</Link>
                </Button>
              ) : (
                <Button variant="info">
                  <Link to="/login" className="text-decoration-none">
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
