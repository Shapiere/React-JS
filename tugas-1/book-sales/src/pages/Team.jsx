{/* Team — grid card dari template Bootstrap "Album" */}
const members = [
  {
    id: 1,
    name: 'Ahmad Fikri',
    role: 'Frontend Developer',
    bio: 'Fokus membangun antarmuka React yang bersih, responsif, dan mudah dipakai.',
  },
  {
    id: 2,
    name: 'Salsabila Putri',
    role: 'UI/UX Designer',
    bio: 'Merancang alur dan tampilan toko buku agar nyaman dipakai semua kalangan.',
  },
  {
    id: 3,
    name: 'Rizky Pratama',
    role: 'Backend Developer',
    bio: 'Mengelola API, basis data, dan integrasi pembayaran di balik layar.',
  },
  {
    id: 4,
    name: 'Nadia Rahmawati',
    role: 'Content Curator',
    bio: 'Menyusun katalog dan rekomendasi buku supaya pembaca mudah menemukan bacaan.',
  },
  {
    id: 5,
    name: 'Bagas Setiawan',
    role: 'QA Engineer',
    bio: 'Menguji setiap fitur sebelum rilis agar pengalaman belanja tetap mulus.',
  },
  {
    id: 6,
    name: 'Dewi Lestari',
    role: 'Customer Support',
    bio: 'Mendampingi pembeli dari pertanyaan stok sampai proses pengiriman.',
  },
]

function Team() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Our Team</h1>
            <p className="lead text-body-secondary">
              Orang-orang di balik Book Store yang menjaga katalog, tampilan, dan layanan
              tetap berjalan setiap hari.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {members.map((member) => (
              <div className="col" key={member.id}>
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={`https://picsum.photos/seed/member${member.id}/500/225`}
                    alt={member.name}
                    height="225"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-body-secondary">{member.role}</p>
                    <p className="card-text">{member.bio}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Profile
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
