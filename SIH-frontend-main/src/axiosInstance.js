import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/', // Set your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can set up request interceptors here if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config before sending the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// You can set up response interceptors here if needed
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response data here
    return response;
  },
  (error) => {
    // Handle the response error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
