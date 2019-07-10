import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Loan extends React.Component {

  constructor(){
    super()
  }

  state = {
    opened: false
  }

  render(){
    const handleClick = () => {
      if(this.state.opened) {
        this.setState({
          opened: false
        })
      } else {
        this.setState({
          opened: true
        })
      }
      return null
    }

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
          <Accordion.Toggle as={Button} variant="link" eventKey={ this.props.collapseKey } onClick={ this.handleClick }>
            {this.state.opened ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
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
