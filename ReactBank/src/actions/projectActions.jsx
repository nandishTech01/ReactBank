import axios from 'axios';
import { DELETE_WALLET, GET_ERRORS, GET_WALLETS } from './types';


export const createWallet = (newWallet, navigate) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8081/wallet', newWallet);
    console.log('Response:', response); // Check the response
    if (response) {
      navigate('/dashboard'); // Navigate using the passed navigate function
    } else {
      console.log('Invalid response');
    }
  } catch (err) {
    console.log('Error:', err); // Check the error
    console.log('Error response:', err.response); // Check the error response
    dispatch({ type: GET_ERRORS, payload: err.response ? err.response.data : 'Unknown error occurred' });
  }
};


export const getWallets = () => async dispatch => {
      await axios.get('http://localhost:8081/wallet')
      .then((res) => {
          dispatch({type:GET_WALLETS,payload:res.data})
      })
};


export const getWallet = () => async dispatch => {
  await axios.get(`http://localhost:8081/wallet/${id}`)
  .then((res) => {
      dispatch({type:GET_WALLETS,payload:res.data})
  })
};


export const deleteWallet = (id) => async dispatch => {
  await axios.delete(`http://localhost:8081/wallet/${id}`)
  .then((res) => {
      dispatch({type:DELETE_WALLET,payload:id})
  })
};   //ahi thi pachi reducer ma jase and pachi badhu run thase.