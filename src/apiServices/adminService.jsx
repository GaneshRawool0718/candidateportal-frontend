import axios from 'axios';

// Fetch admin profile from the backend
export const fetchAdminProfile = async () => {
  try {
    console.log("Process Env variable",process.env.REACT_APP_API_BASE_URL);
    
    const response = await axios.get('http://localhost:8080/admin/profile', {
      headers: {
        
        Authorization: `Bearer ${localStorage.getItem('token')}`,  // Send JWT token in the Authorization header
      },
    });
    return response.data;  // Returns the admin profile (name, email)
  } catch (error) {
    
    console.error('Error fetching admin profile:', error);
    throw error;  // Rethrow the error to handle it in the component
  }
};

// Update admin profile on the backend
export const updateAdminProfile = async (profileData) => {
  try {
    const response = await axios.put('/admin/profile', profileData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,  // Send JWT token
      },
    });
    return response.data;  // Returns the updated admin profile
  } catch (error) {
    console.error('Error updating admin profile:', error);
    throw error;  // Rethrow the error to handle it in the component
  }
};
