import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../action/expenses";
const Add = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit = {(expense) => {
        console.log(expense);
        props.dispatch(addExpense(expense));
      }}
    />
  </div>

)

export default connect()(Add);
