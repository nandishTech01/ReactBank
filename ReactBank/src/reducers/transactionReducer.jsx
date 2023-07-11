import { DELETE_TRANSACTION, GET_TRANSACTION, GET_TRANSACTIONS } from "../actions/types";


const initialState={
    transactions:[],
    transaction:''
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return {...state,
                transactions:action.payload};
        case GET_TRANSACTION:
            return {...state,
                transaction:action.payload};
        case DELETE_TRANSACTION:
            return {...state,
                transactions:state.transactions.filter(transaction =>transaction.id!==action.payload) };
            //ahi id lay delete kari dese ahi payload ma id aave che projectactions mathi.
            //ahi filter thi check thase, id che e action mathi lay and x sathe check karse
            //jo id same nahi  thay to delete thay jase.
        default:
            return state;
    }
}