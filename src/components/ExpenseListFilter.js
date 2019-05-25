import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/fitlers';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';

class ExpenseListFilter extends React.Component{
    state={
        calFocused: null
    }
    onDateChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render(){
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={e=>{
                    this.props.dispatch(setTextFilter({text: e.target.value}));
                    // console.log(e.target.value);
                }}/>
                <select
                    value = {this.props.filters.sortBy} 
                    onChange={(e)=>{
                    const sortBy = e.target.value;
                    if(sortBy==='date')
                        this.props.dispatch(sortByDate());
                    else if(sortBy==='amount')
                        this.props.dispatch(sortByAmount());
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={uuid()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuid()}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calFocused}
                    onFocusChange={(calFocused)=>{this.setState(()=>({calFocused}))}}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }
}

const mapStoreToProp = (state)=>{
    return{
        filters: state.filters
    }
};

const connectedExpenseListFilter = connect(mapStoreToProp)(ExpenseListFilter);
export default connectedExpenseListFilter;