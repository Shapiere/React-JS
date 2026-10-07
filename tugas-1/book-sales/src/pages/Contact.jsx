{/* Contact — form dari template Bootstrap "Checkout" */}
function Contact() {
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h1 className="h2">Contact Us</h1>
          <p className="lead">
            Punya pertanyaan soal pesanan, stok buku, atau kerja sama? Kirim pesan lewat
            formulir di bawah ini.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Our Store</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Alamat</h6>
                  <small className="text-body-secondary">
                    Jl. Merdeka No. 10, Jakarta
                  </small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Email</h6>
                  <small className="text-body-secondary">halo@bookstore.id</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Telepon</h6>
                  <small className="text-body-secondary">+62 812 3456 7890</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div className="text-success">
                  <h6 className="my-0">Jam Operasional</h6>
                  <small>Senin - Sabtu</small>
                </div>
                <span className="text-success">08.00 - 20.00</span>
              </li>
            </ul>
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Kirim Pesan</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Nama depan wajib diisi.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Nama belakang wajib diisi.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Masukkan alamat email yang valid.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Pertanyaan tentang pesanan"
                    required
                  />
                  <div className="invalid-feedback">Subjek wajib diisi.</div>
                </div>

                <div className="col-md-5">
                  <label htmlFor="topic" className="form-label">
                    Topik
                  </label>
                  <select className="form-select" id="topic" required defaultValue="">
                    <option value="">Pilih...</option>
                    <option>Pesanan</option>
                    <option>Stok Buku</option>
                    <option>Kerja Sama</option>
                    <option>Lainnya</option>
                  </select>
                  <div className="invalid-feedback">Pilih salah satu topik.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Tulis pesan Anda di sini"
                    required
                  ></textarea>
                  <div className="invalid-feedback">Pesan wajib diisi.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newsletter"
                />
                <label className="form-check-label" htmlFor="newsletter">
                  Saya ingin menerima info buku baru lewat email
                </label>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
