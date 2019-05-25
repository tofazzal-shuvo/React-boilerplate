const expensesReducerDefaultStore = [];
export default (state = expensesReducerDefaultStore, action) => {
    switch (action.type) {
        case ('ADD_EXPENSE'):
            return [...state, action.expense];
        case ('EDIT_EXPENCE'):
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        amount: action.amount,
                        description: action.description,
                        note: action.note,
                        createdAt: action.createdAt
                    };
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