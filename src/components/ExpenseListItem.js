import React from 'react';
import { Link } from 'react-router-dom';
import { EditExpensePage } from './EditExpensePage';

const ExpenseListItem = ({dispatch,description, id, amount, createdAt})=>(
    <div>
        <Link to={`/edit/${id}`} component={EditExpensePage}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;