import { Link } from 'react-router'

{/* Halaman awal: pintu masuk ke registrasi dan area admin */}
function Home() {
  return (
    <main className="landing">
      <h1>Book Sales</h1>
      <p>Sistem informasi penjualan buku.</p>
      <div className="actions">
        <Link to="/register" className="btn-primary">
          Daftar Akun
        </Link>
        <Link to="/admin/genres" className="btn-secondary">
          Masuk Dashboard Admin
        </Link>
      </div>
    </main>
  )
}

export default Home
