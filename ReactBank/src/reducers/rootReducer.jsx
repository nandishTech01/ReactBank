import {combineReducers} from 'redux'
import errorReducers from './errorReducers';
import walletReducer from './walletReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
    errors:errorReducers,
    wallet:walletReducer,
    transaction:transactionReducer
});