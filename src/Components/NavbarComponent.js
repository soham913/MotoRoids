import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "../Css/Styles.css"



const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className ="Navs" bg="light" variant = "light" expand="md">
        <NavbarBrand className="Navbrand" href="/"><FontAwesomeIcon icon ="motorcycle" /> MotoRoids</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="Navlinks" href="/components/">Recents</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navlinks" href="https://github.com/reactstrap/reactstrap">News</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="Navlinks" nav caret>
                Login
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  SignUp
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;