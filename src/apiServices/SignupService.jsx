import { AUTH_BASE_URL } from '../constants/apiConstants';
import { SIGNUP_NETWORK_ERROR } from '../constants/errorConstants.ts';


export const signupService = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/signup`, {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }
    return response.json();
  } catch (error) {
    throw new Error(SIGNUP_NETWORK_ERROR);
  }
};
