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

// Update genre
export const updateGenre = async (id, payload) => {
  const response = await API.put(`/genres/${id}`, payload)
  return response.data.data
}

// Delete genre
export const deleteGenre = async (id) => {
  const response = await API.delete(`/genres/${id}`)
  return response.data
}
