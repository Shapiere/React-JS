import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { register } from '../services/auth'

{/* Halaman registrasi pengguna */}
function Register() {
  const navigate = useNavigate()

  const emptyForm = {
    name: '',
    email: '',
    username: '',
    password: '',
  }

  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setServerError(null)
  }

  // Validasi sederhana sebelum dikirim ke server
  const validate = () => {
    const next = {}

    if (!form.name.trim()) next.name = 'Nama lengkap wajib diisi.'
    if (!form.email.trim()) {
      next.email = 'Email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Format email tidak valid.'
    }
    if (!form.username.trim()) next.username = 'Username wajib diisi.'
    if (!form.password) {
      next.password = 'Password wajib diisi.'
    } else if (form.password.length < 8) {
      next.password = 'Password minimal 8 karakter.'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setServerError(null)

    if (!validate()) return

    try {
      setLoading(true)
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        username: form.username.trim(),
        password: form.password,
      })
      setSuccess(true)
      setForm(emptyForm)
      setTimeout(() => navigate('/'), 1500)
    } catch (err) {
      const message = err.response?.data?.message
      setServerError(
        typeof message === 'string' ? message : 'Registrasi gagal, coba lagi.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Buat Akun</h1>
        <p className="auth-sub">Daftar untuk mulai menggunakan Book Sales.</p>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="reg-name">Nama Lengkap</label>
            <input
              id="reg-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap kamu"
              autoComplete="name"
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="reg-email">Email</label>
            <input
              id="reg-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              autoComplete="email"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="reg-username">Username</label>
            <input
              id="reg-username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="username"
              autoComplete="username"
            />
            {errors.username && (
              <span className="field-error">{errors.username}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimal 8 karakter"
              autoComplete="new-password"
            />
            {errors.password && (
              <span className="field-error">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>

        {serverError && <p className="alert alert-error">{serverError}</p>}
        {success && (
          <p className="alert alert-success">Registrasi berhasil. Mengalihkan...</p>
        )}

        <p className="auth-alt">
          Sudah punya akun? <Link to="/">Kembali ke beranda</Link>
        </p>
      </div>
    </main>
  )
}

export default Register
