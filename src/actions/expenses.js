import uuid from 'uuid';
//expense action generator
export const removeExpense = ({ id = 0 } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
export const editExpence = ({ id = 0, amount = 0, createdAt = 0, description = '', note = '' } = {}) => ({
    type: 'EDIT_EXPENCE',
    id,
    amount,
    createdAt,
    description,
    note
});
export const addExpence = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
});