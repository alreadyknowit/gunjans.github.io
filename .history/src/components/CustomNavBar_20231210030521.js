import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import './CustomNavBar.css'; // Import your CSS file for custom styling
import logo from '../logo.png'
function CustomNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}  expand="md" container="fluid" >
                <NavbarBrand href="/">
                    <img alt='Logo' className='logo' src={logo} ></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Anasayfa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Hakkımızda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Referanslar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Hizmetler</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">İletişim</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;
