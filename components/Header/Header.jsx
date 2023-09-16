import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                src="/logo-green.png"
                alt="My Image"
                width={130}
                height={38}
                objectFit="cover"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                // navbarScroll
              >
                <Nav.Link className="mx-2 text-dark" href="#">Home</Nav.Link>
                <Nav.Link className="mx-2 text-dark" href="#tereworks">How Tere Works</Nav.Link>
                <Nav.Link className="mx-2 text-dark" href="#terebenefits">Tere Benefits</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
                <Button className="">
                  Help Center
                </Button>
              </Nav>
              {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
