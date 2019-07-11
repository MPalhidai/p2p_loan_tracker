import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Jumbotron>
      <Container>
        <ul>
          <li>D3 graph with all loans and transactions</li>
          <li>bar graph multiple transactions</li>
          <li>needs user defined time scaled x-axis</li>
          <li>loans lent negative bar</li>
          <li>payments received positive bar</li>
          <li>D3 line graph overlay with interest accrued</li>
        </ul>
      </Container>
    </Jumbotron>
  )
}

export default Dashboard;
