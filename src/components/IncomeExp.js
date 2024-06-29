import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExp = () => {
  // Accesses the Global Context
  const {transactions} =useContext(GlobalContext)

  // Maps Transaction Amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculates Total Income
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    // Calculates Total Expense
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  


  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}
