import axios from 'axios';
import { userAtom } from '../stores/userStore';

const API_URL = "http://localhost:3000";

async function getFetch(endpoint) {
  const response = await axios.get(`${API_URL}/${endpoint}`);
  return response.data;
}

async function postFetch(endpoint, data) {
  const response = await axios.post(`${API_URL}/${endpoint}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  })
}

async function deleteFetch(endpoint, data) {
  const response = await axios.delete(`${API_URL}/${endpoint}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  })
}

export const authAPI = {
  register: async (data) => {
    try {
      const response = await postFetch('users', data);
      userAtom.update((user) => ({
        ...user,
        auth_token: response.auth_token,
        user: {
          id: response.user.id,
          username: response.user.username,
          email: response.user.email
        },
        authenticated: true
      }));
      return response;
    } catch (error) {
      throw error;
    }
  },
  login:  async (data) => {
    try {
      const response = await postFetch('users/sign_in', data);
      if (response.data.user) {
        userAtom.update((user) => ({
          ...user,
          auth_token: response.headers.authorization,
          user: {
            id: response.data.user.id,
            username: response.data.user.username,
            email: response.data.user.email
          }.email,
          loading: false,
          hasErrors: false,
          authenticated: true
        }));
        axios.defaults.headers.common["Authorization"] = response.headers.authorization;
      } else {
        throw new Error('invalid password or email');
      }
    } catch (error) {
      userAtom.update((user) => ({
        ...user,
        loading: false,
        hasErrors: true,
        authenticated: false
      }));
      console.error(error);
      throw error;
    }
  },
  logout: async () => {
    const data = {
      headers: {
        Authorization: `Bearer ${userAtom.value.auth_token}`
      }
    };
    try {
      await axios.deleteFetch('users/sign_out', data);
      userAtom.update((user) => ({
        ...user,
        user: {
          id: null,
          username: null,
          email: null
        },
        auth_token: null,
        authenticated: false
      }));
      axios.defaults.headers.common['Authorization'] = null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
