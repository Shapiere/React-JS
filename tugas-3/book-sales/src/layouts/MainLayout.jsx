import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

{/* Layout utama: header + isi halaman + footer */}
function MainLayout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
