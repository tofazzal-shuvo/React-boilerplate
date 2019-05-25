import moment from 'moment';
//getVisibleExpenses
export default (expenses, { text, startDate, endDate, sortBy }) => {
    return expenses.filter(expense => {
        const matchStartDate = startDate ? startDate.isSameOrBefore(moment(expense.createdAt),'day') : true;
        const matchEndDate = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(expense);
        // console.log(expense.description);
        // console.log(matchStartDate, matchEndDate, matchText);
        return matchStartDate && matchEndDate && matchText;
    }).sort((a, b)=>{
        if(sortBy === 'amount'){
            return a.amount < b.amount ? -1 : 1;
        }
        else if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? -1 : 1;
        }
    });
}
