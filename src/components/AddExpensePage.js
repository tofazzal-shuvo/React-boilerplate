import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpence } from '../actions/expenses';

const AddExpensePageCom = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(addExpence(expense));
      props.history.push('/');
    }}/>
  </div>
);

export const AddExpensePage =  connect()(AddExpensePageCom);