import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const login = async (email, password) => {
  return await axios.post(`${API_URL}/auth/login`, { email, password });
};

export const register = async (name, email, password) => {
  return await axios.post(`${API_URL}/auth/register`, {name, email, password });
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return await axios.post(`${API_URL}/files/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchFiles = async () => {
  return await axios.get(`${API_URL}/files`);
};
