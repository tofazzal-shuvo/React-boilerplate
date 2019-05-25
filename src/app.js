import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpence } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate } from './actions/fitlers';
import getVisibleExpenses from './selectors/expenses';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
const store = configureStore();

store.dispatch(addExpence({ description: 'Water bill', amount: 2344}));
store.dispatch(addExpence({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpence({ description: 'Rent', amount: 23543}));
// store.dispatch(sortByDate());
// store.dispatch(setTextFilter({ text: 'bill' }));

const state = store.getState();
const expenses = getVisibleExpenses(state.expenses, state.filters);

console.log(state);
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));