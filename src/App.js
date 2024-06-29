import React from "react";
import Header from "./components/Header";
import './App.css'
import { Balance } from "./components/Balance";
import { IncomeExp } from "./components/IncomeExp";
import { TransactionList } from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";



function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExp/>
        <TransactionList/>
        <AddTransaction/>
      </div>

    </GlobalProvider>
  );
}

export default App;
