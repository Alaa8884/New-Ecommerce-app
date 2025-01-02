import { NavLink } from "react-router";
import { HeaderBasket } from "../../ecommerce";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <NavLink to="/" className=" text-decoration-none text-dark">
          <h1 className={headerLogo}>
            <Badge bg="success">Yamen Store</Badge>
          </h1>
        </NavLink>
        <HeaderBasket />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
