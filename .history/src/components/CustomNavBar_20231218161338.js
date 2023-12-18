import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import '../styles/navbar.css'



function CustomNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} expand="md">
                <NavbarBrand href="/">
                    <img alt='Logo' className='logo' src={logo} ></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto justify-content-center" navbar>
                        <NavItem>
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                Anasayfa
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                                Hakkımızda
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/referances" className={`nav-link ${location.pathname === '/referances' ? 'active' : ''}`}>
                                Referanslar
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                                Hizmetler
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                                İletişim
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;
