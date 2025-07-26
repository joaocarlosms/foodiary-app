import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://rq5oob4i9k.execute-api.us-east-1.amazonaws.com',
});
