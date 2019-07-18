import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Loan from './Loan';
import { connect } from 'react-redux';



class LoansList extends React.Component {
  render() {
    return (
      <Container className="py-5">
        <Accordion>
          {
            this.props.loans.map( (loan, idx) => (
              <Loan
                key = { loan.id }
                historyKey = { loan.id }
                collapseKey = { idx }
                currentValue = { loan.currentValue }
                principleAmount = { loan.principleAmount }
                interestRate = { loan.interestRate }
                initiationDate = { loan.initiationDate }
                ammountPaid = { loan.amountPaid }
                interestAccrued = { loan.interestAccrued }
                percentPaid = { loan.percentPaid }
                lender = { loan.lender }
                lendee = { loan.lendee }
              />
            ))
          }
        </Accordion>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    loans: state.loansState.loans
  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LoansList);
