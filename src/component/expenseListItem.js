import React, {Component} from "react";
import { connect } from "react-redux";
import { removeExpense } from "../action/expenses";

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <p>id: {id}</p> 
    <button
      onClick = {() => {
        dispatch(removeExpense({id}))
      }}
    >Remove</button>
  </div>
)


export default connect()(ExpenseListItem);
