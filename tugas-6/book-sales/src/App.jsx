import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import AdminLayout from './layouts/AdminLayout'
import Home from './pages/Home'
import Register from './pages/Register'
import Genre from './pages/admin/Genre'
import Author from './pages/admin/Author'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="register" element={<Register />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="genres" replace />} />
          <Route path="genres" element={<Genre />} />
          <Route path="authors" element={<Author />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
