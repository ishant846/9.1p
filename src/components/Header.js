import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {

    return (
        <header>
            <Navbar expand="lg" variant="light" fixed="top" style={{ backgroundColor: "lightgray" }}>
                <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>ICrowdTask</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{ alignItems: "center" }}>
                        <NavLink to="/" style={{ color: "#000", padding: "5px 10px" }}>How it works</NavLink>
                        <NavLink to="/" style={{ color: "#000", padding: "5px 10px" }}>Requesters</NavLink>
                        <NavLink to="/" style={{ color: "#000", padding: "5px 10px" }}>Workers</NavLink>
                        <NavLink to="/" style={{ color: "#000", padding: "5px 10px" }}>Pricing</NavLink>
                        <NavLink to="/" style={{ color: "#000", padding: "5px 10px" }}>About</NavLink>
                    </Nav>
                    <Nav className="ml-auto" style={{ alignItems: "center" }}>
                        <Button variant="secondary" style={{ width: "100px" }}>Sign In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );

}

export default Header;