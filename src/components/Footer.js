import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer>
      <div class = "footerIcons">
        <Nav.Link href='https://www.michaelpalhidai.com/' className='footerLink'>
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
        <Nav.Link href='https://github.com/MPalhidai' className='footerLink'>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </Nav.Link>
      </div>
      <p class = "footnote">
        created by Michael Palhidai
      </p>
    </footer>
  )
}

export default Footer;
