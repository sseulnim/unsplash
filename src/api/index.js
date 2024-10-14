import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_APP_CLIENT_ID}`,
  },
});
