import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary component correctly', () => {
  const wrapper = shallow(<ExpenseSummary />);
  expect(wrapper).toMatchSnapshot();
});