import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Loan = () => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Current Value
          Name
          Interest Rate
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          Principle Amount
          Interest Rate
          Initiation Date
          Name
          Email
          Ammount Paid
          Percent Paid
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default Loan;
