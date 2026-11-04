import axios from 'axios'

// Base URL API book sales. Bisa dioverride lewat .env (VITE_API_URL).
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8100/api',
  headers: {
    Accept: 'application/json',
  },
})

export default API
