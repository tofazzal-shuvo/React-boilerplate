import { addExpence, removeExpense, editExpence } from '../../actions/expenses';



test('should setup remove object', () => {
    const action = removeExpense({id:'123abc'});
    console.log(action);
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
})


test('should setup edit object', () => {
    expect(editExpence({
        id: 0, amount: 0, createdAt: 0, description: 'description', note: 'note' 
    })).toEqual({
        id: 0, amount: 0, createdAt: 0, description: 'description', note: 'note', type: 'EDIT_EXPENCE'
    });
})
