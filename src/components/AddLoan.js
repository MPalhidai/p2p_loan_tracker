import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


// eventually make this into a modal one question at a time.

class AddLoan extends React.Component {
  render(){
    return (
      <Container>
        <Form className="text-left">
          <Row>
            <Col sm="12" md="10" lg="8">
              <p className="text-muted">
                How much did you loan to someone?
              </p>
            </Col>
          </Row>
          <Form.Group as={Row} controlId="formPrincipleAmount" className='justify-content-around align-items-center'>
            <Form.Label column sm="4" md="3" lg="2">Principle Amount:</Form.Label>
            <Col sm="8" md="7" lg="6">
              <Form.Control type="number" placeholder="5000" />
            </Col>
          </Form.Group>
        </Form>
        <Button variant="outline-secondary" type="submit">
          Submit
        </Button>
      </Container>
    )
  }
}

export default AddLoan;
