

import axios from 'axios';

export const BudgetPhones = {
  async getBudgetIphones() {
    try {
      const response = await axios.get('http://localhost:8000/api/budget-phones');
      console.log("in the data")
      console.log(response.data);
      return response.data; // Return the data received from the API
    } catch (error) {
      console.error('Error:', error);
      throw error; // Propagate the error so it can be handled elsewhere if needed
    }
  }
};
