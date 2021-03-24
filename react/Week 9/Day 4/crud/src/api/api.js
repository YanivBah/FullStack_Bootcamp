import axios from 'axios';
const api = axios.create({
  baseURL: "https://605b9bd027f0050017c07910.mockapi.io/",
});

export default api;