import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Loan extends React.Component {
  render(){
    return (
      <Card>
        <Card.Header>
          <div>
            <strong>{ this.props.lender } </strong>
            lent <strong>${ this.props.principleAmount } </strong>
            to <strong>{ this.props.lendee } </strong>
            at <strong>{ this.props.interestRate * 100 }% </strong>
            on <strong>{ this.props.initiationDate }</strong>.
            <Accordion.Toggle as={Button} variant="light" eventKey={ this.props.collapseKey } className="expandButton">
              <FontAwesomeIcon icon={faChevronDown} />
            </Accordion.Toggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={ this.props.collapseKey }>
          <Card.Body>
            Amount Paid: { this.props.amountPaid }
            <br />
            Interest Accrued: { this.props.interestAccrued }
            <br />
            Percent Paid: { this.props.percentPaid * 100 }%
            <br />
            <Link to = { `/loans/show/${this.props.historyKey }` }>Payment History</Link>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}

export default Loan;
