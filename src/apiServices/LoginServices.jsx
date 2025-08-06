// src/apiServices/loginServices.js
import axios from 'axios';
import { NETWORK_ERROR } from '../constants/errorConstants.ts';
import { BASE_URL } from '../constants/apiConstants';

export const loginUser = async (credentials) => {
    /*
    Function to log in a user.
    It sends a POST request to the login endpoint with the user's credentials.
    */
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data; // Return the response data containing token and user info
  } catch (error) {
  if (error.response && error.response.data) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(NETWORK_ERROR);
  }
}
};