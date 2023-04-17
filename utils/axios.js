import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:9001',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // Modify the request config before it is sent
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Modify the response data before it is returned
    return response;
  },
  (error) => {
    // Handle the response error
    return Promise.reject(error);
  }
);

export default api;
