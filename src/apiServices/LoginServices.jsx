// src/apiServices/LoginServices.jsx

import { AUTH_BASE_URL } from '../constants/apiConstants';
import { NETWORK_ERROR } from '../constants/errorConstants.ts';

export const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return await response.json(); // should include token and id
  } catch (err) {
    throw new Error(NETWORK_ERROR);
  }
};
