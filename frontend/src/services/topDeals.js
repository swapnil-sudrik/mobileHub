

import axios from 'axios';

export const TopDeals = {
  async getTopDealsProducts() {
    try {
      const response = await axios.get('http://localhost:8000/api/top-deals');
      return response.data; // Return the data received from the API
    } catch (error) {
      console.error('Error:', error);
      throw error; // Propagate the error so it can be handled elsewhere if needed
    }
  }
};
