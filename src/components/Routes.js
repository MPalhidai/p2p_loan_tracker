import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoansList from './LoansList';
import Loan from './Loan';


const Routes = () => {
  return (
    <Switch>
      <Route exact path = '/loans' render = { props =>
        <div>
          <Dashboard />
          <LoansList />
        </div>
      } />
      <Route exact path = '/loans/:id' />
      <Route exact path = '/loans/addLoan' />
    </Switch>
  )
}

export default Routes;
