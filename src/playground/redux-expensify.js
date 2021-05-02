import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//  Add expense generator
const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
);

// Delete expense generator
const deleteExpense = ({ id }) => ({
  type: 'DELETE_EXPENSE',
  id
});

//Edit expense generator
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// change text generator
const changeText = (text = '') => ({
  type: 'CHANGE_TEXT',
  text
});

// sort by amount generator
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// sort by date generator
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// set start date generator
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// set end date generator
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


//Expenses Reducer
// const expensesReducerDefaultState = [];
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);  // concat method returns new array and does not modifies state array
      return [...state, action.expense];
    case 'DELETE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else return expense;
      });
    default:
      return state;
  }
};

// Filters Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, text: action.text }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// get visible expenses
const getVisisbleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    } else {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Calling actions for expense
const expenseOne = store.dispatch(addExpense({ description: 'January Rent', amount: 54500, createdAt: -21000 }));

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', note: 'Hot Coffee at Durga cafe', amount: 2000, createdAt: -1000 }));

// store.dispatch(deleteExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 45400 }));

// Calling actions for filters
// store.dispatch(changeText('caf'));
// store.dispatch(changeText());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'asdflkj',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};