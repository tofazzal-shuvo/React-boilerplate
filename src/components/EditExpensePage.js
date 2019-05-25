import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpence, removeExpense } from '../actions/expenses';

const  EditExpensePageCom = (props) => {
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense)=>{
          props.history.push('/');
          props.dispatch(editExpence({...expense,id: props.match.params.id}));
        }}
      />
      <button onClick={()=>{
        props.dispatch(removeExpense({id: props.match.params.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps= ((state, props)=>{
  return{
    expense: state.expenses.find(item=> item.id === props.match.params.id)
  }
});

export const EditExpensePage = connect(mapStateToProps)(EditExpensePageCom);

