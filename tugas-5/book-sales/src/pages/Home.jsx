import { Link } from 'react-router'

{/* Halaman awal: pintu masuk ke area admin */}
function Home() {
  return (
    <main className="landing">
      <h1>Book Sales</h1>
      <p>Sistem informasi penjualan buku.</p>
      <Link to="/admin/genres" className="btn-primary">
        Masuk Dashboard Admin
      </Link>
    </main>
  )
}

export default Home
