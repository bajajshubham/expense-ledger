import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let changeText, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  changeText = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      changeText={changeText}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
});

test('should render EcpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render EcpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle textChange', () => {
  wrapper.find('input').simulate('change', {
    target: { value: 'rent' }
  });
  expect(changeText).toHaveBeenLastCalledWith('rent');
});

test('should handle sortByDate', () => {
  wrapper.setProps({ filters: altFilters })
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  });
  expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should handle sortByAmount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle setStartDate and setEndDate', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(altFilters);
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle onFocusChange', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});