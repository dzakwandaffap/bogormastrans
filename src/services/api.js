// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.bogormastrans.com',
  headers: {
    Accept: 'application/json',
  },
})

export default api
