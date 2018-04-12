import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from "./expenseListItem";
import selectExpenses from '../selector/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => (
      <ExpenseListItem
        key = {expense.id}
        {...expense}
      />
    ))}
    
  </div>
)

const mapStateToProps = (state) => {
  // console.log("state from com: ", state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);


