import { Link, NavLink, Outlet } from 'react-router'

{/* Layout admin: sidebar tetap, konten berubah sesuai halaman */}
function AdminLayout() {
  const menus = [
    { to: '/admin/genres', label: 'Genre' },
    { to: '/admin/authors', label: 'Author' },
  ]

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link to="/" className="admin-brand">
          Book Sales
        </Link>
        <nav className="admin-nav">
          {menus.map((menu) => (
            <NavLink
              key={menu.to}
              to={menu.to}
              className={({ isActive }) =>
                isActive ? 'admin-nav-link active' : 'admin-nav-link'
              }
            >
              {menu.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Admin</h1>
          <Link to="/" className="admin-header-link">
            Lihat situs
          </Link>
        </header>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
