import React, { children, createContext , useReducer } from "react";
import Appreducer from './Appreducer'

// initial transaction
const intialState ={
    transactions:[]
    
}

// creating context
export const GlobalContext =createContext(intialState)

// provider component (it wraps children with globalcontext)
export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(Appreducer, intialState)

    // change the state
    function deleteTransaction(id){
        dispatch({
            // type of action being performed
            type: 'DELETE_TRANSACTION',
            // data (id)
            payload: id  
            })
            }
    function addTransaction(transaction){
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: transaction
                    })
                    }



    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction 
        ,addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}