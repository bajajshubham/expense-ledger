import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <p>Expense count: {this.props.expenses.length}</p>
          <p>Total expense: ₹{expensesTotal(this.props.expenses)}</p>
        </h3>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);