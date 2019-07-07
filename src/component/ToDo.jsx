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
    <div>
      <div
        style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
      >
        {props.todo.text}
      </div>
      <input
        type="button"
        value="Completed"
        onClick={() => completeToDo(props.index)}
      />
      <input
        type="button"
        value="Delete"
        onClick={() => removeToDo(props.index)}
      />
    </div>
  );
}
