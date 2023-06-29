import axios from 'axios';
import { GET_ERRORS } from './types';

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
