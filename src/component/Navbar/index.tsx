import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LoginButton } from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <b className="h3 text-success">THE RESEARCH CARE</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-white d-flex align-items-center">
            <Nav.Link as={Link} to="/" eventKey="1">
              ค้นหางาน
            </Nav.Link>
            <Nav.Link as={Link} to="/redeem" eventKey="2">
              ของสมนาคุณ
            </Nav.Link>
            <Nav.Link as={Link} to="/login" eventKey="3">
              <LoginButton>
                <AiOutlineUser className="mr-1"></AiOutlineUser>
                เข้าสู่ระบบ
              </LoginButton>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
