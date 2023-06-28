import axios from 'axios';
import { GET_ERRORS } from './types';

export const createWallet = (newWallet, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:8081/wallet', newWallet);
    navigate('/dashboard');
  } catch (err) {
    if (err.response && err.response.data) {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    } else {
      console.log('Error:', err);
      // Handle other error scenarios or show a generic error message.
    }
  }
};
