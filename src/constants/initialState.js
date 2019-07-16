const initialState = {
  currentUser: {
    id: 1,
    firstName: 'Michael',
    lastName: 'Palhidai',
    email: 'mpalhidai@gmail.com',
    accountNumber: 1
  },
  loans: [
    {
      id: 1,
      principleAmount: 5000,
      interestRate: 0.05,
      currentValue: 5000,
      initiationDate: '7/3/2019',
      amountPaid: 0,
      interestAccrued: 0,
      percentPaid: 0,
      lender: 'Michael Palhidai',
      lendee: 'Michaela Jenichen'
    },
    {
      id: 2,
      principleAmount: 2000,
      interestRate: 0.10,
      currentValue: 2000,
      initiationDate: '7/3/2018',
      amountPaid: 200,
      interestAccrued: 200,
      percentPaid: 0,
      lender: 'Michael Palhidai',
      lendee: 'Michaela Jenichen'
    },
    {
      id: 3,
      principleAmount: 5000,
      interestRate: 0.05,
      currentValue: 5000,
      initiationDate: '7/3/2019',
      amountPaid: 0,
      interestAccrued: 0,
      percentPaid: 0,
      lender: 'Michaela Jenichen',
      lendee: 'Michael Palhidai'
    },
    {
      id: 4,
      principleAmount: 2000,
      interestRate: 0.10,
      currentValue: 2000,
      initiationDate: '7/3/2018',
      amountPaid: 200,
      interestAccrued: 200,
      percentPaid: 0,
      lender: 'Scott Palhidai',
      lendee: 'Michael Palhidai'
    },
  ]
}

export default initialState;
