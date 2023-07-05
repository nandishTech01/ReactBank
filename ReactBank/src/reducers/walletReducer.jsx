import { DELETE_WALLET, GET_WALLET, GET_WALLETS } from "../actions/types";


const initialState={
    wallets:[],
    wallet:''
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_WALLETS:
            return {...state,wallets:action.payload};
        case GET_WALLET:
            return {...state,wallet:action.payload};
        case DELETE_WALLET:
            return {...state,wallets:state.wallets.filter(x=>x.id!==action.payload) };
            //ahi id lay delete kari dese ahi payload ma id aave che projectactions mathi.
            //ahi filter thi check thase, id che e action mathi lay and x sathe check karse
            //jo id same nahi  thay to delete thay jase.
        default:
            return state;
    }
}