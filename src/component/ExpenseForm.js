import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: ""
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            autoFocus
            placeholder = "Description"
            value = {this.state.description}
            onChange = {this.onDescriptionChange}
          />
          <input 
            type="number"
            placeholder = "Amount"
          />
          <textarea
            placeholder = "Add a note for your expense"
            value = {this.state.note}
            onChange = {this.onNoteChange}
          ></textarea>
          <button>Add button</button>
        </form>
      </div>
    )
  }
}