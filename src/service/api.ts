import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_URL,
});

export default api;
