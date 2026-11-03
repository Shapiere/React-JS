import API from '../api'

// Read all genre
export const getGenres = async () => {
  const response = await API.get('/genres')
  return response.data.data
}

// Create genre
export const createGenre = async (payload) => {
  const response = await API.post('/genres', payload)
  return response.data.data
}
