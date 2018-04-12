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
// class ExpenseListItem extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h3>{this.props.description}</h3>
//         <p>{this.props.amount} - {this.props.createdAt}</p>
//         <p>id: {this.props.id}</p>
//         <button
//           onClick={() => {
//             console.log(this.props)
//           }}
//         >Remove</button>
//       </div>
//     )
//   }
  
// }


// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses
//   }
// }


export default connect()(ExpenseListItem);
