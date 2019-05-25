//filter action genetator
export const setStartDate = (startDate = undefined) => ({
    type: 'START_DATE',
    startDate
});
export const setEndDate = (endDate = undefined) => ({
    type: 'END_DATE',
    endDate
});
export const setTextFilter = (text = {}) => ({
    type: 'SET_TEXT_FILTER',
    text
});
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    date: 'date'
});
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    amount: 'amount'
});