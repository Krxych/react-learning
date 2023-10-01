import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { 
    id: 'e1',
    title: 'Car Insurance 1', 
    amount: 53.76,
    date: new Date(2023,1,2),
  },
  { 
    id: 'e2',
    title: 'Car Insurance 2', 
    amount: 29.23,
    date: new Date(2022,9,2),
  },
  { 
    id: 'e3',
    title: 'Car Insurance 3', 
    amount: 553.13,
    date: new Date(2021,12,2),
  },
  { 
    id: 'e4',
    title: 'Car Insurance 4', 
    amount: 94.65,
    date: new Date(2021,5,2),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
