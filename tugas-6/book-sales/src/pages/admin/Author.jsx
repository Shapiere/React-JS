import { useEffect, useState } from 'react'
import {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from '../../services/authors'

const emptyForm = { name: '', photo: '', bio: '' }

{/* Halaman admin: Read, Create, Update, dan Delete data author */}
function Author() {
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
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

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      name: form.name.trim(),
      photo: form.photo.trim(),
      bio: form.bio.trim(),
    }

    try {
      setSubmitting(true)
      if (editingId) {
        await updateAuthor(editingId, payload)
        setNotice('Author berhasil diperbarui.')
      } else {
        await createAuthor(payload)
        setNotice('Author berhasil ditambahkan.')
      }
      resetForm()
      setError(null)
      await loadAuthors()
    } catch (err) {
      const message = err.response?.data?.message
      setError(
        typeof message === 'string' ? message : 'Gagal menyimpan author.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  // Isi form dengan data lama untuk diperbarui
  const handleEdit = (author) => {
    setEditingId(author.id)
    setForm({ name: author.name, photo: author.photo, bio: author.bio })
    setNotice(null)
    setError(null)
  }

  const handleDelete = async (author) => {
    const yakin = window.confirm(`Hapus author "${author.name}"?`)
    if (!yakin) return

    try {
      await deleteAuthor(author.id)
      if (editingId === author.id) resetForm()
      setNotice('Author berhasil dihapus.')
      setError(null)
      await loadAuthors()
    } catch (err) {
      const message = err.response?.data?.message
      setError(typeof message === 'string' ? message : 'Gagal menghapus author.')
    }
  }

  return (
    <>
      <section className="panel">
        <h2>{editingId ? `Edit Author #${editingId}` : 'Tambah Author'}</h2>
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

          <div className="actions">
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting
                ? 'Menyimpan...'
                : editingId
                  ? 'Simpan Perubahan'
                  : 'Simpan Author'}
            </button>
            {editingId && (
              <button type="button" className="btn-secondary" onClick={resetForm}>
                Batal
              </button>
            )}
          </div>
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
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id}>
                  <td>{author.id}</td>
                  <td>{author.name}</td>
                  <td>{author.photo}</td>
                  <td>{author.bio}</td>
                  <td className="row-actions">
                    <button
                      type="button"
                      className="btn-edit"
                      onClick={() => handleEdit(author)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleDelete(author)}
                    >
                      Hapus
                    </button>
                  </td>
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
