import axios from "axios";

const api = axios.create({
  baseURL: "https://dashcodeapi.onrender.com",
});

export default api;
