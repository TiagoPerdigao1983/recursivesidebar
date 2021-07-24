import React from "react";

import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function recursiveNavbar({ navbarLinks }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {navbarLinks.map(({ label, name, ...rest }) => (
              <Nav className="mr-auto" key={name} style={{ with: 100 }}>
                <Nav.Link href="#features">{label}</Nav.Link>

                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default recursiveNavbar;
