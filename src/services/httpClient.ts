import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://t72i2m87y5.execute-api.us-east-1.amazonaws.com',
});
