import { useEffect, useState } from 'react'
import { getAuthors, createAuthor } from '../../services/authors'

{/* Halaman admin: Read + Create data author */}
function Author() {
  const emptyForm = { name: '', photo: '', bio: '' }

  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [form, setForm] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)

  const loadAuthors = async () => {
    try {
      setLoading(true)
      const data = await getAuthors()
      setAuthors(data)
      setError(null)
    } catch (err) {
      setError(err.response?.data?.message ?? err.message)
    } finally {
      setLoading(false)
    }
  }

  // Ambil data awal saat komponen dimuat
  useEffect(() => {
    loadAuthors()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setSubmitting(true)
      await createAuthor({
        name: form.name.trim(),
        photo: form.photo.trim(),
        bio: form.bio.trim(),
      })
      setForm(emptyForm)
      setNotice('Author berhasil ditambahkan.')
      setError(null)
      await loadAuthors()
    } catch (err) {
      const message = err.response?.data?.message
      setError(
        typeof message === 'string' ? message : 'Gagal menambahkan author.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="panel">
        <h2>Tambah Author</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="author-name">Nama</label>
            <input
              id="author-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Contoh: Andrea Hirata"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="author-photo">Foto</label>
            <input
              id="author-photo"
              name="photo"
              type="text"
              value={form.photo}
              onChange={handleChange}
              placeholder="andrea-hirata.jpg"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="author-bio">Bio</label>
            <textarea
              id="author-bio"
              name="bio"
              rows="3"
              value={form.bio}
              onChange={handleChange}
              placeholder="Riwayat singkat author"
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? 'Menyimpan...' : 'Simpan Author'}
          </button>
        </form>

        {notice && <p className="alert alert-success">{notice}</p>}
        {error && <p className="alert alert-error">{error}</p>}
      </section>

      <section className="panel">
        <h2>Daftar Author</h2>

        {loading && <p className="state">Memuat data...</p>}

        {!loading && authors.length === 0 && (
          <p className="state">Data tidak ditemukan.</p>
        )}

        {!loading && authors.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Foto</th>
                <th>Bio</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id}>
                  <td>{author.id}</td>
                  <td>{author.name}</td>
                  <td>{author.photo}</td>
                  <td>{author.bio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  )
}

export default Author
