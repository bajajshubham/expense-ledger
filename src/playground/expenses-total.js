const moment = require('moment');

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 0,
  createdAt: 0
},
{
  id: '2',
  description: 'Rent',
  note: '',
  amount: 4500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Coffee',
  note: 'Durga',
  amount: 20,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

const dummy = [expenses[0]];

const getTotalExpense = (dummy) => {
  if (dummy.length > 0) {
    const amountArray = dummy.map((expense) => expense.amount);
    return amountArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  } else return 0
};

const total = getTotalExpense(dummy);
console.log(total);