import React, { useState } from "react";
import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);
    
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing &&
                <div className="new-expense__actions">
                    <button onClick={startEditingHandler}>Add New Expense</button>
                </div>
            }
            {isEditing &&
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
            }
        </div>
    );
};

export default NewExpense;