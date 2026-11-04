import API from '../api'

// Read all author
export const getAuthors = async () => {
  const response = await API.get('/authors')
  return response.data.data
}

// Create author
export const createAuthor = async (payload) => {
  const response = await API.post('/authors', payload)
  return response.data.data
}

// Update author
export const updateAuthor = async (id, payload) => {
  const response = await API.put(`/authors/${id}`, payload)
  return response.data.data
}

// Delete author
export const deleteAuthor = async (id) => {
  const response = await API.delete(`/authors/${id}`)
  return response.data
}
