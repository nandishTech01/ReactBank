import axios from 'axios';
import { GET_ERRORS } from './types';
import { useNavigate } from 'react-router-dom';

export const createWallet = (newWallet, history) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8081/wallet', newWallet);
    console.log('Response:', response); // Check the response
    if (response) {
      // window.location.replace('/dashboard');
      const navigate = useNavigate();
      navigate('/dashboard');

    } else {
      console.log('Invalid history object:', history);
    }
  } catch (err) {
    console.log('Error:', err); // Check the error
    console.log('Error response:', err.response); // Check the error response
    dispatch({ type: GET_ERRORS, payload: err.response ? err.response.data : 'Unknown error occurred' });
  }
};
