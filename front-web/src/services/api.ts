/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { OrderPayload } from '../pages/Orders/types';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchLocalMapBox(local: string): any {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`,
  );
}

export function saveOrder(payload: OrderPayload): any {
  return axios.post('http://localhost:8080/orders', payload);
}

export default api;
