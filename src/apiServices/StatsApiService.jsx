import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants'; // Your base API URL from the .env

// Helper function to create axios instance with token
const axiosInstance = () => {
  const token = localStorage.getItem('token');  // Retrieve the token from localStorage
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Authorization': `Bearer ${token}`,  // Set token in Authorization header
    },
  });
};

// Function to fetch dashboard statistics
export const getDashboardStats = async () => {
  try {
    const response = await axiosInstance().get('/candidates/dashboard/stats');
    return response.data; // Return stats data
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error; // Rethrow the error after logging it
  }
};

// Function to get candidates by their status


export const getCandidatesByStatus = async (status) => {
  try {
    const url = status === 'total' 
      ? '/candidates'  // Fetch all candidates if status is 'total'
      : `/candidates/dashboard/candidates/${status}`;  // Fetch candidates by specific status

    const response = await axiosInstance().get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${status} candidates:`, error);
    throw error; // Rethrow the error after logging it
  }
};

// Function to fetch total candidates (if needed separately)
export const getTotalCandidates = async () => {
  try {
    const response = await axiosInstance().get('/candidates/dashboard/total');
    return response.data; // Return total candidates count
  } catch (error) {
    console.error('Error fetching total candidates:', error);
    throw error; // Rethrow the error after logging it
  }
};

// Function to fetch candidate by ID
export const getCandidateById = async (id) => {
  try {
    const token = localStorage.getItem('token');  // Get the JWT token from localStorage
    const response = await axios.get(`${API_BASE_URL}/candidates/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the JWT token in the header
      },
    });
    return response.data;  // Return the candidate data
  } catch (error) {
    console.error('Error fetching candidate by ID:', error);
    throw error;  // Throw the error to be handled by the caller
  }
};
