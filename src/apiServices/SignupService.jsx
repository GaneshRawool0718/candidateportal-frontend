import { SIGNUP_NETWORK_ERROR } from '../constants/errorConstants.ts';
import { BASE_URL } from '../constants/apiConstants';

export const signupService = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Signup failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(SIGNUP_NETWORK_ERROR);
  }
};
