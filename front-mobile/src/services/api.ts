import axios from 'axios';

// const API_URL = 'http://localhost:8080';

// export function fetchOrders(): any {
//   return axios(`${API_URL}/orders`);
// }

const api = axios.create({
  baseURL: 'https://sds2-backend-21.herokuapp.com',
});

export default api;
