import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/navbar.css'
function CustomNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} expand="md" >
                <NavbarBrand href="/">
                    <img alt='Logo' className='logo' src={logo} ></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto justify-content-center" navbar>
                        <NavItem>
                            <Link to="/">Anasayfa</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about"> Hakkımızda</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/referances">Referanslar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/services">Hizmetler</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">İletişim</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;
