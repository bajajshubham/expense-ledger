import database from '../firebase/firebase';

//  Add expense generator
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
}
);

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '', note = '', amount = 0, createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }
    database.ref(`users/${uid}/expenses`).push(expense)
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

export const startDeleteExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
      .then(() => {
        dispatch(deleteExpense({ id }));
      });
  };
};

//Edit expense generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates) //for firebase
      .then(() => {
        dispatch(editExpense(id, updates)); // for redux
      });
  };
};

//to set redux store from firebase
export const setExpenses = (expenses) => ({ // from firebase to redux store
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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