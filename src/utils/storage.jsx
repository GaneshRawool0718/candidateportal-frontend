// src/utils/storage.js

export const saveAuthData = (token, id) => {
  localStorage.setItem('authToken', token);
  localStorage.setItem('userId', id);
};

export const getAuthData = () => {
  return {
    token: localStorage.getItem('authToken'),
    userId: localStorage.getItem('userId'),
  };
};

export const clearAuthData = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userId');
};
