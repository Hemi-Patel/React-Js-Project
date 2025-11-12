import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold text-danger">
          🎟️ BookMyShow
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link fw-semibold text-white">Home</Link>
            <Link to="/AddMovie" className="btn btn-danger fw-semibold ms-3">
              ➕ Add Movie
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
