import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { UserContext } from "../../App";

const Header = () => {
  const { state } = useContext(UserContext);
  const active = "text-dark";
  const inactive = "";

  const RenderMenu = () => {
    if (state) {
      return (
        <Nav className="nav">
          <div className="about">
            <Nav.Link
              href="/about"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              About
            </Nav.Link>
          </div>
          <div className="users">
            <Nav.Link href="/users">Users</Nav.Link>
          </div>
          <div className="logout">
            <Nav.Link href="/logout">Logout</Nav.Link>
          </div>
        </Nav>
      );
    } else {
      return (
        <Nav className="nav">
          <div className="about">
            <Nav.Link href="/about">About</Nav.Link>
          </div>
        </Nav>
      );
    }
  };

  return (
    <Navbar bg="light" expand="md">
      {/* <Container> */}
      <Navbar.Brand className="nav-brand" href="/">
        walter p moore
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <RenderMenu />
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;
