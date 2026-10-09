import { useRef } from 'react'
import booksData from '../Utils/books'

{/* Halaman Book */}
function Book() {
  let booksList = [...booksData] // Salin data buku awal
  const booksContainerRef = useRef(null) // Ref untuk container buku

  const handleClick = () => {
    const newBook = {
      id: booksList.length + 1,
      title: 'Clean Code untuk Pemula',
      author: 'Rudi Hartono',
      year: 2024,
      description:
        'Kebiasaan menulis kode yang mudah dibaca dan dipelihara sejak awal.',
      image: 'https://picsum.photos/seed/book10/400/250',
    }
    booksList.push(newBook) // Menambahkan buku baru ke dalam array

    // Menambahkan buku baru ke dalam DOM menggunakan ref
    if (booksContainerRef.current) {
      const newBookElement = document.createElement('div')
      newBookElement.className = 'col'
      newBookElement.innerHTML = `
        <div class="card shadow-sm">
          <img class="card-img-top" src="${newBook.image}" alt="${newBook.title}" height="225" />
          <div class="card-body">
            <h5 class="card-title">${newBook.title}</h5>
            <p class="card-text text-body-secondary">${newBook.author} · ${newBook.year}</p>
            <p class="card-text">${newBook.description}</p>
          </div>
        </div>
      `
      booksContainerRef.current.appendChild(newBookElement)
    }

    console.log('Buku terbaru:', booksList)
    alert('Buku baru berhasil ditambahkan! Silahkan cek daftar buku di browser.')
  }

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Daftar Buku</h1>
            <p className="lead text-body-secondary">
              Semua koleksi buku yang tersedia di Book Store.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
            ref={booksContainerRef}
          >
            {booksList.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={book.image}
                    alt={book.title}
                    height="225"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-body-secondary">
                      {book.author} · {book.year}
                    </p>
                    <p className="card-text">{book.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary btn-lg mt-4"
            >
              Tambah Buku Baru
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book
