import API from '../api'

// Registrasi pengguna baru
export const register = async (payload) => {
  const response = await API.post('/register', payload)
  return response.data
}
