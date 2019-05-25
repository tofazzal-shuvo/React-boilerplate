import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//filter action genetator
const setStartDate = (startDate = undefined) => ({
    type: 'START_DATE',
    startDate
})
const setEndDate = (endDate = undefined) => ({
    type: 'END_DATE',
    endDate
})
const setTextFilter = (update = {}) => ({
    type: 'EDIT_FILTER',
    update
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    date: 'date'
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    amount: 'amount'
});
//expense action generator
const removeExpense = ({ id = 0 } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
const editExpence = ({ id = 0, amount = 0 } = {}) => ({
    type: 'EDIT_EXPENCE',
    id,
    amount
});
const addExpence = (
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
const expensesReducerDefaultStore = [];
const expensesReducer = (state = expensesReducerDefaultStore, action) => {
    switch (action.type) {
        case ('ADD_EXPENSE'):
            return [...state, action.expense];
        case ('EDIT_EXPENCE'):
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, amount: action.amount };
                } else {
                    return expense;
                }
            });
        case ('REMOVE_EXPENSE'):
            return state.filter(({ id }) => id != action.id);
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case ('EDIT_FILTER'):
            return {
                ...state,
                ...action.update
            };
        case ('SORT_BY_DATE'):
            return {
                ...state,
                sortBy: action.date
            }
        case ('SORT_BY_AMOUNT'):
            return {
                ...state,
                sortBy: action.amount
            }
        case ('START_DATE'):
            return {
                ...state,
                startDate: action.startDate
            }
        case ('END_DATE'):
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
//getVisibleExpenses
const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy }) => {
    return expenses.filter(expense => {
        const matchStartDate = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const matchEndDate = typeof endDate !== 'number' || expense.createdAt <= endDate;//|| expense.createdAt <= endDate
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
        return matchStartDate && matchEndDate && matchText;
    }).sort((a, b) => {
        if(sortBy === 'date')
            return a.createdAt > b.createdAt ? -1 : 1;
        else if(sortBy === 'amount')
            return a.amount < b.amount ? -1 : 1
    });
}

//creating store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    // console.log(state);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// const expenseOne = store.dispatch(addExpence());
const expenseTwo = store.dispatch(addExpence({ description: 'Rent', note: 'alkswer', amount: 2663, createdAt: -21000 }));
const expenseThree = store.dispatch(addExpence({ description: 'qwerwr', note: 'm234nm', amount: 243, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(removeExpense({ id: expenseThree.expense.id }));
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

//filter dispatch
// store.dispatch(setTextFilter({ text: 'rent' }));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(12));
// store.dispatch(setEndDate());
