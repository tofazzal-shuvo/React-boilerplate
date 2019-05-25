import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expences.map(item=>(<ExpensesListItem key={item.id} {...item} />))}
    </div>
);

const mapStateToProps = (state)=>{
    return{
    expences: selectExpense(state.expenses, state.filters)
}};
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;