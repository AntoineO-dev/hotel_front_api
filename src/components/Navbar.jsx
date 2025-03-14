import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'  >Hotel API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto d-flex justify-content-around" style={{ width: '30%' }}>
                        <Link to="/" className="nav-link">Accueil</Link>
                        <Link to="/chambres" className="nav-link">Chambres</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to ="/login" className="nav-link">Login</Link>
                        <Link to ="/register" className="nav-link">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;