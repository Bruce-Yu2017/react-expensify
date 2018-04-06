import React from "react";
import ReactDOM from "react-dom";

const Edit = (props) => {
  console.log(props);
  return (
    <div>
      This is Edit {props.match.params.id};
    </div>
  )
}
export default Edit;