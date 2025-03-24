import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaHeart, FaUser, FaList, FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa"; // Import FaUserPlus for signup
import { MdCategory } from "react-icons/md";


const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);


    return (
        <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
            expanded={expanded}
            className="shadow-lg"
        >
            <Container>
                {/* Brand */}
                <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
                    🛍️ MyStore
                </Navbar.Brand>

                {/* Hamburger Toggle */}
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />

                {/* Navbar Collapse */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                            <FaHome className="me-1" /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/categories" onClick={() => setExpanded(false)}>
                            <MdCategory className="me-1" /> Categories
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart" onClick={() => setExpanded(false)}>
                            <FaShoppingCart className="me-1" /> Cart
                        </Nav.Link>
                        <Nav.Link as={Link} to="/wishlist" onClick={() => setExpanded(false)}>
                            <FaHeart className="me-1" /> Wishlist
                        </Nav.Link>
                        <Nav.Link as={Link} to="/checkout" onClick={() => setExpanded(false)}>
                            <FaList className="me-1" /> Checkout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;










