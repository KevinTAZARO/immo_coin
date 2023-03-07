import axios from 'axios';

const API_URL = "http://localhost:3000";

async function getFetch(endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`)
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const advertAPI = {
  getAdverts: async () => {
    try {
      const response = await getFetch('advertisements');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
