import React from 'react';
import logo from '../images/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar.Brand className="header-brand" href="/loans">P2PLT</Navbar.Brand>
      <Nav className="mr-auto">
          <Link className="header-link" to="/loans">Dashboard</Link>
          <Link className="header-link" to="/loans/new">Track a Loan</Link>
      </Nav>
      <Nav className="">
        <Nav.Link href="#account">
          <div className = 'userCircle'>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header;
