import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext)
  const submitHandeler = (event) => {
    event.preventDefault()

    if(value.trim()){
      alert.show("Created note!", "success")
      setValue('')
    } else {
      alert.show('Enter text!')
    }

  }
  return (
    <form onSubmit={submitHandeler}>
      <div className="form-group mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="write a to-do list..."
          value={value}
          onChange = {e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
