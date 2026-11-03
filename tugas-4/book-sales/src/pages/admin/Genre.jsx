import { useEffect, useState } from 'react'
import { getGenres, createGenre } from '../../services/genres'

{/* Halaman admin: Read + Create data genre */}
function Genre() {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({ name: '', description: '' })
  const [submitting, setSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)

  const loadGenres = async () => {
    try {
      setLoading(true)
      const data = await getGenres()
      setGenres(data)
      setError(null)
    } catch (err) {
      setError(err.response?.data?.message ?? err.message)
    } finally {
      setLoading(false)
    }
  }

  // Ambil data awal saat komponen dimuat
  useEffect(() => {
    loadGenres()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setSubmitting(true)
      await createGenre({
        name: form.name.trim(),
        description: form.description.trim(),
      })
      setForm({ name: '', description: '' })
      setNotice('Genre berhasil ditambahkan.')
      setError(null)
      await loadGenres()
    } catch (err) {
      const message = err.response?.data?.message
      setError(
        typeof message === 'string' ? message : 'Gagal menambahkan genre.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="panel">
        <h2>Tambah Genre</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="genre-name">Nama</label>
            <input
              id="genre-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Contoh: Fantasi"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="genre-description">Deskripsi</label>
            <textarea
              id="genre-description"
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              placeholder="Deskripsi singkat genre"
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? 'Menyimpan...' : 'Simpan Genre'}
          </button>
        </form>

        {notice && <p className="alert alert-success">{notice}</p>}
        {error && <p className="alert alert-error">{error}</p>}
      </section>

      <section className="panel">
        <h2>Daftar Genre</h2>

        {loading && <p className="state">Memuat data...</p>}

        {!loading && genres.length === 0 && (
          <p className="state">Data tidak ditemukan.</p>
        )}

        {!loading && genres.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre) => (
                <tr key={genre.id}>
                  <td>{genre.id}</td>
                  <td>{genre.name}</td>
                  <td>{genre.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  )
}

export default Genre
