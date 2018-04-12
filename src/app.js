import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './action/expenses';
import { setTextFilter } from './action/filters';
import "normalize.css/normalize.css";
import "./style/style.scss"
import getVisibleExpenses from './selector/expenses';

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 4500}));
store.dispatch(addExpense({ description: "gas bill", createdAt: 1000}));
store.dispatch(addExpense({ description: "rent", amount: 200000 }));


const state = store.getState();
console.log('state: ', state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"));

