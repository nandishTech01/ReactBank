import {combineReducers} from 'redux'
import errorReducers from './errorReducers';
import walletReducer from './walletReducer';

export default combineReducers({
    errors:errorReducers,
    wallet:walletReducer,
    
});