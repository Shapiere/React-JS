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
