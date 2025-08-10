// services/candidateService.js

import { API_BASE_URL } from '../constants/apiConstants';

export const registerCandidate = async (formData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // send the JWT token here
      },
      body: JSON.stringify(formData),
    });

    return response;
  } catch (error) {
    throw error;
  }
};
