// addressService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust the base URL as per your backend setup

const addressService = {
  createAddress: async (addressData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/addresses`, addressData);
      return response.data;
    } catch (error) {
      throw error.response.data.message || 'Error creating address';
    }
  },
};

export default addressService;
