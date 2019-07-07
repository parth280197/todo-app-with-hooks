import React from "react";
import "bootstrap/dist/css/bootstrap.css";
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
        style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
      >
        {props.todo.text}
      </div>
      <input
        type="button"
        value="Completed"
        className="btn btn-success m-1"
        onClick={() => completeToDo(props.index)}
      />
      <input
        type="button"
        value="Delete"
        className="btn btn-danger m-1"
        onClick={() => removeToDo(props.index)}
      />
    </li>
  );
}
