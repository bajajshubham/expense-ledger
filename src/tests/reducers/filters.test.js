import filterReducer from '../../reducers/filters';
import moment from 'moment';
import { toMomentObject } from 'react-dates';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT ' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should change the text filter', () => {
  const text = 'new text';
  const state = filterReducer(undefined, { type: 'CHANGE_TEXT', text });
  expect(state.text).toBe(text);
});

test('should change the start date filter', () => {
  const startDate = moment();
  const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toEqual(startDate);
});

test('should change the end date filter', () => {
  const endDate = moment();
  const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toEqual(endDate);
});