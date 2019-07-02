import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Loan from './Loan';



const LoansList = () => {
  return (
    <Container>
      <Accordion>
      // map function pass down loan id to use as collapse id key
        <Loan />
        <Loan />
        <Loan />
      </Accordion>
    </Container>
  )
}

export default LoansList;
