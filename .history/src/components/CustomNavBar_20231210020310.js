import React,{useState}from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler,Collapse } from 'reactstrap';
import './CustomNavBar.css'; // Import your CSS file for custom styling

function CustomNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
            <Navbar {...args} color="light" expand="md"  className="custom-navbar" >
                <NavbarBrand href="/">Logo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Anasayfa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Hakkımızda</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Referanslar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Hizmetler</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">İletişim</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;
