import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//expencs reducer
const addExpence = ({
    text = 'wer',
    note = 'sdf',
    amount = 0
} = {}) => ({
    type: 'ADD_EXPENCE',
    expencs: {
        id: uuid(),
        text,
        note,
        amount,
        txt:'sdfsadf'
    }
});
const expencseDefaultValue = [];
const expencseReducer = (state = expencseDefaultValue, action) => {
    switch (action.type) {
        case ('ADD_EXPENCE'):
            return state.concat(action.expencs);
        default:
            return state;
    }
}
//filter reducer
const filterDefaultValue = {
    text: '',
    note: '',
    amount: 0,
    createAt: 0
}
const filterReducer = (state = filterDefaultValue, action) => {
    switch (action.type) {
        case ('ADD'):
            return action.expencs
        default:
            return state;
    }
}

//creating store
const store = createStore(combineReducers({
    expences: expencseReducer,
    filters: filterReducer
}));

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(addExpence());