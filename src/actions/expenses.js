import uuid from 'uuid';
//  Add expense generator
export const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
);

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