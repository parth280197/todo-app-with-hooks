import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function InputForm(props) {
  const [value, setValue] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (!value) return;
    props.addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control m-1"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter new ToDo"
      />
    </form>
  );
}
