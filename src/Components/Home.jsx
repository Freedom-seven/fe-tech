import React from "react";
import "./home.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const home = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar-home"
      >
        <Container>
          <Navbar.Brand href="#home">FE Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link href="#deets">Add Employee</Nav.Link>
              <Nav.Link href="#pricing">View Employee List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="home">
        <h1>FE TECH</h1>
        <h3>OUR MISSION</h3>
        <p>
          We provide lifecycle power solutions to enhance the business of our
          <br />
          customers, whilst creating better technologies that benefit both the
          <br />
          customer and the environment.
        </p>
        <h3>OUR VISION</h3>
        <p>We will be the most valued business partner of all our customers.</p>
        <h3>OUR VALUES</h3>
        <p>
          <span>* </span>
          <i>Conduct business with integrity & fairness</i>
          <br />

          <span>* </span>
          <i>Focus on our customer's needs</i>
          <br />

          <span>* </span>
          <i>Continuously train our employees & improve our processes</i>
          <br />

          <span>* </span>
          <i>Providequality products & services</i>
          <br />

          <span>* </span>
          <i>Reward employees on merit & promote teamwork</i>
          <br />

          <span>* </span>
          <i>Maintain safe & healthy working environment</i>
          <br />
        </p>
      </div>
    </>
  );
};

export default home;
