import { Transaction } from "../components/Transaction";

// reducer function that handles the state transitions. and return new state
export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                //  copy the existing state
                ...state,
                // updated with a new array except the one with the id
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload
                )
                }
            case 'ADD_TRANSACTION':
                return{
                        ...state,
                        // new transaction  followed by all existing transactions 
                        transactions: [action.payload, ...state.transactions]
                    }



        

        default:
            return state;
    }
}