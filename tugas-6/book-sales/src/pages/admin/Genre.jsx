import { useEffect, useState } from 'react'
import { getGenres, createGenre, updateGenre, deleteGenre } from '../../services/genres'

const emptyForm = { name: '', description: '' }

{/* Halaman admin: Read, Create, Update, dan Delete data genre */}
function Genre() {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
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
      description: form.description.trim(),
    }

    try {
      setSubmitting(true)
      if (editingId) {
        await updateGenre(editingId, payload)
        setNotice('Genre berhasil diperbarui.')
      } else {
        await createGenre(payload)
        setNotice('Genre berhasil ditambahkan.')
      }
      resetForm()
      setError(null)
      await loadGenres()
    } catch (err) {
      const message = err.response?.data?.message
      setError(
        typeof message === 'string' ? message : 'Gagal menyimpan genre.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  // Isi form dengan data lama untuk diperbarui
  const handleEdit = (genre) => {
    setEditingId(genre.id)
    setForm({ name: genre.name, description: genre.description })
    setNotice(null)
    setError(null)
  }

  const handleDelete = async (genre) => {
    const yakin = window.confirm(`Hapus genre "${genre.name}"?`)
    if (!yakin) return

    try {
      await deleteGenre(genre.id)
      if (editingId === genre.id) resetForm()
      setNotice('Genre berhasil dihapus.')
      setError(null)
      await loadGenres()
    } catch (err) {
      const message = err.response?.data?.message
      setError(typeof message === 'string' ? message : 'Gagal menghapus genre.')
    }
  }

  return (
    <>
      <section className="panel">
        <h2>{editingId ? `Edit Genre #${editingId}` : 'Tambah Genre'}</h2>
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

          <div className="actions">
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting
                ? 'Menyimpan...'
                : editingId
                  ? 'Simpan Perubahan'
                  : 'Simpan Genre'}
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
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre) => (
                <tr key={genre.id}>
                  <td>{genre.id}</td>
                  <td>{genre.name}</td>
                  <td>{genre.description}</td>
                  <td className="row-actions">
                    <button
                      type="button"
                      className="btn-edit"
                      onClick={() => handleEdit(genre)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleDelete(genre)}
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

export default Genre
