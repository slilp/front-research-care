import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LoginButton, LogoBrand, LogoText } from "./style";
import { Logo } from "../../asset/images";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useAuthSelector } from "../../state/hooks";

function NavBar() {
  const [loading, setLoading] = useState<boolean>(false);
  const { signout } = useAuth();
  const { isAuthenticated } = useAuthSelector();

  const logout = async () => {
    await signout();
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <LogoBrand src={Logo}></LogoBrand>
          <LogoText>The Research Care</LogoText>
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
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/dashboard" eventKey="2">
                  Dashboard
                </Nav.Link>
                <Nav.Link eventKey="4">
                  <LoginButton onClick={logout}>
                    <AiOutlineUser className="mr-1"></AiOutlineUser>
                    ออกจากระบบ
                  </LoginButton>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" eventKey="3">
                <LoginButton>
                  <AiOutlineUser className="mr-1"></AiOutlineUser>
                  เข้าสู่ระบบ
                </LoginButton>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
