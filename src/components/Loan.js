import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class Loan extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={ this.props.collapseKey }>
            Current Value: { this.props.currentValue }
            <br />
            Lent To: { this.props.lendee }
            <br />
            Interest Rate: { this.props.interestRate * 100 }%
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.collapseKey }>
          <Card.Body>
            Principle Amount: { this.props.principleAmount }
            <br />
            Initiation Date: { this.props.initiationDate }
            <br />
            Ammount Paid: { this.props.ammountPaid }
            <br />
            Interest Accrued: { this.props.interestAccrued }
            <br />
            Percent Paid: { this.props.percentPaid * 100 }%
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}

export default Loan;
