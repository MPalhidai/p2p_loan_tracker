import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Loan extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <Card>
        <Card.Header>
          <div class="collapsedLoanCard">
            <p>
              Current Value: { this.props.currentValue }
            </p>
            <p>
              Lent To: { this.props.lendee }
            </p>
            <p>
              Interest Rate: { this.props.interestRate * 100 }%
            </p>
          </div>
          <Accordion.Toggle as={Button} variant="link" eventKey={ this.props.collapseKey }>
            {
              // if(clicked ) {
              //  <FontAwesomeIcon icon={faChevronUp} />
              // } else {
              //  <FontAwesomeIcon icon={faChevronDown} />
              // }
            }
            <FontAwesomeIcon icon={faChevronDown} />
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
