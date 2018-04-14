import React, {Component} from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";  
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>
      {numeral(amount / 100).format("$0,0.00")} 
      - 
      {moment(createdAt).format("MMMM Do, YYYY")}</p>
    <p>id: {id}</p> 
  </div>
)


export default ExpenseListItem;
