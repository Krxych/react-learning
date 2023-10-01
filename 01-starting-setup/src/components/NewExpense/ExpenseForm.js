import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enderedTitle, setEnteredTitle] = useState();
    const [enderedAmount, setEnderedAmount] = useState();
    const [enderedDate, setEnderedDate] = useState();

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnderedAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnderedDate(event.target.value);
    };

    let expensesContent = <p>No expenses found.</p>


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
          title: enderedTitle,
          amount: +enderedAmount,
          date: new Date(enderedDate)  
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnderedAmount('');
        setEnderedDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enderedTitle} onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enderedAmount} onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enderedDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;