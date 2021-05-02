import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, deleteExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  deleteExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpense} deleteExpense={deleteExpense} history={history} />);
});

test('should render editExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const update = {
    note: 'New note added'
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(update);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, update);
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(deleteExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});