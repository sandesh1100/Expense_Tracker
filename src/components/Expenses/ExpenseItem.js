import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//this is a Stateless(or Dumb) component
const ExpenseItem = (props) => {
  //when using <ExpenseDate/> we have to set props and by setting the props we r passing 'date data' from <App/> to <ExpenseItem/> then to <ExpenseDate/>
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
