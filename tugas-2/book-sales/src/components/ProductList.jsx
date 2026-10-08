{/* Product List */}
const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    description:
      'Panduan praktis membangun kebiasaan kecil yang memberi perubahan besar dalam hidup.',
    price: 'Rp 95.000',
  },
  {
    id: 2,
    title: 'Filosofi Teras',
    description:
      'Pengantar filsafat Stoa untuk mengelola emosi dan hidup lebih tenang sehari-hari.',
    price: 'Rp 88.000',
  },
  {
    id: 3,
    title: 'Bumi Manusia',
    description:
      'Novel sejarah yang mengangkat kisah cinta, kelas sosial, dan perjuangan di masa kolonial.',
    price: 'Rp 120.000',
  },
  {
    id: 4,
    title: 'Sapiens',
    description:
      'Sejarah singkat umat manusia, dari revolusi kognitif hingga revolusi teknologi.',
    price: 'Rp 150.000',
  },
  {
    id: 5,
    title: 'Rich Dad Poor Dad',
    description:
      'Pelajaran literasi finansial dari dua sosok ayah dengan cara pandang yang berbeda.',
    price: 'Rp 85.000',
  },
  {
    id: 6,
    title: 'Laskar Pelangi',
    description:
      'Kisah anak-anak Belitung yang mengejar pendidikan dengan keterbatasan dan semangat besar.',
    price: 'Rp 99.000',
  },
]

function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Koleksi buku pilihan yang paling banyak dibaca dan dicari pembaca kami.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={`https://picsum.photos/seed/book${book.id}/500/225`}
                    alt={book.title}
                    height="225"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">{book.price}</small>
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

export default ProductList
