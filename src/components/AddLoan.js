import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createLoan } from '../actions/index';
import { MS_PER_YEAR, COMPOUND, RESOLVE } from '../constants/calculations';


// eventually make this into a modal one question at a time.
// add monthly payment slider
// terminationDate should be calculalated based on monthly payment and futureValue

class AddLoan extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 5,
      lendee: 'this person',
      principleAmount: 0,
      interestRate: 0,
      initiationDate: "2019-07-18",
      amountPaid: 0,
      terminationDate: "2020-07-18",
      email: null,
      phoneNumber: null,
      futureValue: 0
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.calculateValue())
      }, RESOLVE)
    })

    promise.then( value => {
      this.setState({ futureValue: value });
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createLoan(this.state)
    let increment = this.state.id + 1
    this.setState({
      id: increment,
      lendee: 'this person',
      principleAmount: 0,
      interestRate: 0,
      initiationDate: "2019-07-18",
      amountPaid: 0,
      terminationDate: "2020-07-18",
      email: null,
      phoneNumber: null,
      futureValue: 0
    })
  }

  dateDiffInYears = (a, b) => {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return (utc2 - utc1) / MS_PER_YEAR;
  }

  calculateValue = () => {
    // A = P (1 + r/n)^(nt)
    const init = new Date(this.state.initiationDate)
    const term = new Date(this.state.terminationDate)
    const time = this.dateDiffInYears(init, term)
    console.log(time)
    const amount = (this.state.principleAmount - this.state.amountPaid) * (1 + this.state.interestRate / 100 / COMPOUND) ** (COMPOUND * time)
    return amount.toFixed(2)
  }

  render(){
    return (
      <Container className="py-5">
        <Form className="text-left">
          <p className="text-muted">
            1. Who did you loan money to?
          </p>
          <Form.Group as={Row} controlId="formLendee" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Full Name:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="text" placeholder="John Smith" name="lendee" onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <p className="text-muted">
            2. How much did you loan to {this.state.lendee}?
          </p>
          <Form.Group as={Row} controlId="formPrincipleAmount" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Principle Amount:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="number" name="principleAmount" placeholder="$5000" onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <p className="text-muted">
            3. What is the agreed upon interest rate?
          </p>
          <Form.Group as={Row} controlId="formRate" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Interest Rate:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="number" name="interestRate" placeholder="5.55%" onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <p className="text-muted">
            4. What day did you agree upon for interest to start accruing?
          </p>
          <Form.Group as={Row} controlId="formInitDate" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Initiation Date:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="date" name="initiationDate" onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <p className="text-muted">
            5. Has {this.state.lendee} made a payment? If so, how much has been paid?
          </p>
          <Form.Group as={Row} controlId="formPaid" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Amount Paid:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="number" placeholder="$100" name="amountPaid" onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <p className="text-muted">
            5. What is the expected termination date?
          </p>
          <Form.Group as={Row} controlId="formTermDate" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Termination Date:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="date" name="terminationDate" onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <p className="text-muted">
            6. What is {this.state.lendee}'s contact information?
          </p>
          <Form.Group as={Row} controlId="formEmail" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Email:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="email" placeholder="JohnSmith@P2PLT.com" name="email" onChange={this.handleChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPhone" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Phone:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="tel" placeholder="1 (800) 867-5309" name="phoneNumber" onChange={this.handleChange} />
            </Col>
          </Form.Group>


          <p className="text-muted">
            Value at termination date: ${this.state.futureValue}
          </p>
        </Form>

        <Button variant="outline-secondary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  createLoan
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLoan);
