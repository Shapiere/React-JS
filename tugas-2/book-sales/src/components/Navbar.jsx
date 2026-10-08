import { Link, NavLink } from 'react-router'

{/* Header */}
function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <i className="fa-solid fa-book fa-2xl" style={{ color: '#74C0FC' }}></i>
          <span className="ms-2 fs-4">bookstore</span>
        </Link>
      </div>

      <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/" end className="nav-link px-2">
            Home
          </NavLink>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            Book
          </a>
        </li>
        <li>
          <NavLink to="/team" className="nav-link px-2">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link px-2">
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Register
        </button>
      </div>
    </header>
  )
}

export default Navbar
