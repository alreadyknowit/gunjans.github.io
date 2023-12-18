import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import logo from '../images/logo.png'
import '../'
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
                            <NavLink href="/about">Hakkımızda</NavLink>
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
