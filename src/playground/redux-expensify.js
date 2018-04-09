import {createStore, combineReducers} from "redux";
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//EDIT_EXPENSE
const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update  
})

const expenseDefaultState = [];

const expenseReducer = (state = expenseDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': 
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          }
        }
        else {
          return expense;
        }
      })
    default:
      return state;
  }
}

//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
})
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
})

//START_DATE
const startDate = (startDate = "today") => ({
  type: "START_DATE",
  startDate
})
//END_DATE
const endDate = (endDate = "tomorrow") => ({
  type: "END_DATE",
  endDate
})

const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER": 
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT": 
      return {
        ...state,
        sortBy: "amount"
      }
    case "SORT_BY_DATE": 
      return {
        ...state,
        sortBy: "date"
      }
    case "START_DATE":
      return {
        ...state,
        startDate: action.startDate
      }
    case "END_DATE":
      return {
        ...state,
        endDate: action.endDate
      }
    default: 
      return state;
  }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  // console.log(sortBy);
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === "date") {
      return a.createdAt > b.createdAt ? 1 : -1;
    }
    if(sortBy === "amount") {
      return b - a;
    }
  });
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
)
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(store.getState());  
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter("ee"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(startDate(-200))
// store.dispatch(endDate(1250))
const demoState = {
  expenses: [{
    id: "1234",
    description: "Jan rent",
    note: "final payment for this address",
    createAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
}

