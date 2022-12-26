import axios from 'axios';
import { API_IP } from '../constants/api';

export const api = axios.create({
  baseURL: `http://${API_IP}:3001/`
});
