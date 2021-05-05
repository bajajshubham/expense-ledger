export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, amtVal) => sum + amtVal , 0);
};