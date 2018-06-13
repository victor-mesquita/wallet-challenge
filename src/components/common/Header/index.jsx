import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, NavbarBrand, NavbarItem, NavbarMenu, NavbarEnd } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';

const Header = () => (
  <Navbar className="has-shadow is-spaced">
    <Container>
      <NavbarBrand>
        <NavbarItem>
          <NavLink to="/"> Wallet Rock </NavLink>
        </NavbarItem>
        <NavbarItem href="#" isHidden="desktop">
          <FontAwesomeIcon icon={Icons.faSignOutAlt} className="mr-5"></FontAwesomeIcon>
          <span>Sair</span>
        </NavbarItem>
      </NavbarBrand>

      <NavbarMenu>
        <NavbarEnd>
          <NavbarItem href="#" isHidden="touch">
            <FontAwesomeIcon icon={Icons.faSignOutAlt} className="mr-5"></FontAwesomeIcon>
            <span>Sair</span>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Container>
  </Navbar>
);

export default Header;
