import { changeText, sortByAmount, sortByDate, setEndDate, setStartDate } from '../../actions/filters';
import moment from 'moment';

test('should setup the change text filter when provided with text', () => {
  const action = changeText('Bill');
  expect(action).toEqual({
    type: 'CHANGE_TEXT',
    text: 'Bill'
  });
});

test('should setup the change text filter when default text is present', () => {
  const action = changeText();
  expect(action).toEqual({
    type: 'CHANGE_TEXT',
    text: ''
  });
});

test('should setup the sort by amount filter', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup the sort by date filter', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup the start date filter', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should setup the end date filter', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});