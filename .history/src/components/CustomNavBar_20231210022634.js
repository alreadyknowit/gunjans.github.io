import React,{useState}from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler,Collapse } from 'reactstrap';

function CustomNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
            <Navbar {...args} color="light" expand="md" container="fluid" >
                <NavbarBrand href="/">Logo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="" navbar>
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
