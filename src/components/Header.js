import React from 'react';
import logo from '../images/logo.svg';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar.Brand href="#home">P2PLT</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#create">Track a Loan</Nav.Link>
        <Nav.Link href="#pay">Payment History</Nav.Link>
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
