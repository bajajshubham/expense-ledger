// change text generator
export const changeText = (text = '') => ({
  type: 'CHANGE_TEXT',
  text
});

// sort by amount generator
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// sort by date generator
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// set start date generator
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// set end date generator
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});