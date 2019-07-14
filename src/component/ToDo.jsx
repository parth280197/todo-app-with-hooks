import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {MDBIcon} from "mdbreact";

export default function ToDo(props) {
  const completeToDo = index => {
    props.markCompleted(index);
  };
  const removeToDo = index => {
    props.deleteToDo(index);
  };
  return (
    <li class="list-group-item">
      <div
        style={{textDecoration: props.todo.isCompleted ? "line-through" : ""}}
      >
        {props.todo.text}
      </div>

      <MDBIcon
        icon="check"
        className="m-1"
        size="lg"
        style={{color: "green", cursor: "pointer"}}
        onClick={() => completeToDo(props.index)}
      />
      <i
        className="fas fa-trash-alt m-1"
        style={{color: "red", cursor: "pointer"}}
        onClick={() => removeToDo(props.index)}
      />
    </li>
  );
}
