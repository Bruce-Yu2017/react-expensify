import React from "react";
import ExpenseList from "./ExpenseList.js";
import ExpenseListFilters from './ExpenseListFilters';
const Dashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
  
)

export default Dashboard;
