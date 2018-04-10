import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './action/expenses';
import { setTextFilter } from './action/filters';
import "normalize.css/normalize.css";
import "./style/style.scss"
import getVisibleExpenses from './selector/expenses';

const store = configureStore();
store.dispatch(addExpense({description: "water bill"}));
store.dispatch(addExpense({description: "gas bill"}));
store.dispatch(setTextFilter('gas'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById("app"));

