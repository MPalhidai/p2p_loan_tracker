import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Loan extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <Card>
        <Card.Header>
          <div>
            You lent <strong>${ this.props.principleAmount } </strong>
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
