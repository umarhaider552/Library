// src/utils/auth.js

// Save token to local storage
export const saveToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  // Get token from local storage
  export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  // Remove token from local storage (logout)
  export const removeToken = () => {
    localStorage.removeItem('authToken');
  };
  