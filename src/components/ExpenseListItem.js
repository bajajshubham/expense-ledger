import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deleteExpense } from '../actions/expenses';
import moment from 'moment'

const ExpenseListItem = ({ /*dispatch,*/ id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <span>Amount: {amount}, Created at: {moment(createdAt).format('DD/MM/YYYY')}</span>
    {/*
      <button id={id} onClick={() => {
      dispatch(deleteExpense({ id }));
      }}>Delete</button>
    */}
  </div>
);

export default ExpenseListItem;