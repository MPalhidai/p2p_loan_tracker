import React from 'react';
import logo from '../images/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// bootstrap link is a link and not a react router url change
// need to refactor to match bootstrap style but with react router Link

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar.Brand href="/loans">P2PLT</Navbar.Brand>
      <Nav className="mr-auto">

        <Nav.Link>
          <Link to="/loans">Dashboard</Link>
        </Nav.Link>

        <Nav.Link href="/loans/new">Track a Loan</Nav.Link>
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
