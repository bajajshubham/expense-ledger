import { addExpense, editExpense, deleteExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = deleteExpense({ id: '123abc' });
  expect(action).toEqual({  //toEqual for objects and arrays
    type: 'DELETE_EXPENSE',
    id: '123abc'
  });
});

test('Should setup edit expense action aobject', () => {
  const action = editExpense('123lkj', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123lkj',
    updates: {
      note: 'new note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 1095,
    createdAt: 1000,
    note: 'New note'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});