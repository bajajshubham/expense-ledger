import uuid from 'uuid';
import database from '../firebase/firebase';

//  Add expense generator
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
  /*: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }*/
}
);

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', note = '', amount = 0, createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }
    database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

// Delete expense generator
export const deleteExpense = ({ id }) => ({
  type: 'DELETE_EXPENSE',
  id
});

//Edit expense generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const setExpenses = (expenses) => ({ // from firebase to redux store
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};