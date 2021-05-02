import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'DELETE_EXPENSE',
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'DELETE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Router',
    note: 'New Router',
    amount: 500,
    createdAt: 200000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense if found', () => {
  const updates = {
    amount: 5000,
    note: 'Final rent'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect({...state[1]}).toEqual({ ...expenses[1], ...updates });
});

test('should not edit an expense if not found', () => {
  const updates = {
    amount: 5000,
    note: 'Final rent'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-2',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});