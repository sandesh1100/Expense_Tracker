import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmt, setEnteredAmt] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  /* For 2nd and 3rd approach */
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmt: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /* 2nd approach */
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    /* 3rd approach ... most preferred */
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amtChangeHandler = (event) => {
    setEnteredAmt(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevents auto reload whole pg when a form is submitted ...V.Js

    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmt,
      date: new Date(EnteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={EnteredAmt}
            onChange={amtChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
