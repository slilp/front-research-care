import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LoginButton, LogoBrand, LogoText, LogoutButton } from "./style";
import { Logo } from "../../asset/images";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useAuthSelector } from "../../state/hooks";
import Hidden from "@material-ui/core/Hidden";

function NavBar() {
  const [loading, setLoading] = useState<boolean>(false);
  const { signout } = useAuth();
  const { isAuthenticated, user } = useAuthSelector();

  const logout = async () => {
    await signout();
  };

  const navDropdownTitle = (
    <LoginButton>
      <AiOutlineUser className="mr-1"></AiOutlineUser>
      {user.firstName} {user.lastName}
    </LoginButton>
  );

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
                <Nav.Link as={Link} to="/dashboard" eventKey="4">
                  Dashboard
                </Nav.Link>
                <Hidden mdUp>
                  <Nav.Link as={Link} to="/info" eventKey="5">
                    เเก้ไขข้อมูล
                  </Nav.Link>
                  <Nav.Link as={Link} to="/gift" eventKey="6">
                    ประวัติเเลกรางวัล
                  </Nav.Link>
                  <Nav.Link onClick={logout} eventKey="7">
                    ออกจากระบบ
                  </Nav.Link>
                  <br></br>
                  <LoginButton>
                    <AiOutlineUser className="mr-1"></AiOutlineUser>
                    {user.firstName} {user.lastName}
                  </LoginButton>
                  <br></br>
                </Hidden>

                <Hidden smDown>
                  <NavDropdown
                    title={navDropdownTitle}
                    id="basic-nav-dropdown"
                    className="text-center"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/info"
                      eventKey="5"
                      className="text-center text-muted p-2"
                    >
                      เเก้ไขข้อมูล
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/gift"
                      eventKey="6"
                      className="text-center text-muted p-2"
                    >
                      ประวัติเเลกรางวัล
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={logout}
                      className="text-center text-muted p-2"
                    >
                      ออกจากระบบ
                    </NavDropdown.Item>
                  </NavDropdown>
                </Hidden>
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
