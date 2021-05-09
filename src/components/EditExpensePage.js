import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startDeleteExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (update) => {
        this.props.editExpense(this.props.expense.id, update);
        this.props.history.push('/'); //redirects to the mentioned url
    };

    onClick = () => {
        this.props.startDeleteExpense({ id: this.props.expense.id });
        this.props.history.push('/'); //redirects to the mentioned url
    };

    render() {
        return (
            <div>
                <h3>Edit Expense</h3>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onClick}>Delete</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, update) => dispatch(editExpense(id, update)),
        startDeleteExpense: (id) => dispatch(startDeleteExpense(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);