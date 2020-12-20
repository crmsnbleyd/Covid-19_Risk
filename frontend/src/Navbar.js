import './Navbar.css';
import React, { useState } from "react";
import logo from './img/Logo.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
function Navbarn() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <Navbar className="navbar-expand-lg navigation" light id="navb">
            <img src={logo} alt="baby shark"className="img" />
            <NavbarBrand id="brand">Covid Risk Calculator</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="ml-auto">
                    <NavItem><NavLink href="/">Home</NavLink></NavItem>
                    <NavItem><NavLink href="/main">Dashboard</NavLink></NavItem>
                    <NavItem><NavLink href="/about">About us</NavLink></NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navbarn;