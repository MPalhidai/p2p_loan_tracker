import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


// eventually make this into a modal one question at a time.

class AddLoan extends React.Component {

  state = {
    lendee: 'this person',
    principleAmount: 0,
    interestRate: 0,
    initiationDate: null,
    amountPaid: 0,
    terminationDate: null,
    email: null,
    phoneNumber: null,
    value: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.calculateValue()
  }

  calculateValue = () => {
    // A = P (1 + r/n) (nt)


    // this.setState({
    //   value:
    // })
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
              <Form.Control type="number" name="principleAmount" placeholder="$5000" />
            </Col>
          </Form.Group>

          <p className="text-muted">
            3. What is the agreed upon interest rate?
          </p>
          <Form.Group as={Row} controlId="formRate" className='justify-content-between align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Interest Rate:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="number" name="interestRate" placeholder="5.55%" />
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
              <Form.Control type="tel" placeholder="1(800)867-5309" name="phoneNumber" onChange={this.handleChange} />
            </Col>
          </Form.Group>
        </Form>

        <p className="text-muted">
          Value at termination date: {this.state.value}
        </p>

        <Button variant="outline-secondary" type="submit">
          Submit
        </Button>
      </Container>
    )
  }
}

export default AddLoan;
