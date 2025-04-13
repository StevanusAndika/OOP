// 1. ENCAPSULATION (Pembungkusan data dan metode terkait)
class Buku {
  #isbn; // Private field (encapsulation)

  constructor(judul, penulis, tahunTerbit, isbn) {
    this.judul = judul;
    this.penulis = penulis;
    this.tahunTerbit = tahunTerbit;
    this.#isbn = isbn;
    this._rating = 0; // Protected convention (bukan benar-benar protected)
  }

  // Getter dan Setter untuk encapsulation
  get isbn() {
    return this.#isbn;
  }

  set rating(nilai) {
    if (nilai >= 0 && nilai <= 5) {
      this._rating = nilai;
    } else {
      console.log("Rating harus antara 0-5");
    }
  }

  get rating() {
    return this._rating;
  }

  info() {
    return `Buku: ${this.judul}, ditulis oleh ${this.penulis}, terbit tahun ${this.tahunTerbit}.`;
  }

  // Abstraction: metode internal yang tidak perlu diketahui pengguna
  #generateKodePustaka() {
    return `BK-${this.tahunTerbit}-${this.#isbn.slice(-4)}`;
  }

  getKodePustaka() {
    return this.#generateKodePustaka();
  }
}

// 2. INHERITANCE (Pewarisan)
class BukuFiksi extends Buku {
  constructor(judul, penulis, tahunTerbit, isbn, genre) {
    super(judul, penulis, tahunTerbit, isbn);
    this.genre = genre;
  }

  // Polymorphism: Override metode info()
  info() {
    return `${super.info()} Genre: ${this.genre}.`;
  }
}

class BukuNonFiksi extends Buku {
  constructor(judul, penulis, tahunTerbit, isbn, subjek) {
    super(judul, penulis, tahunTerbit, isbn);
    this.subjek = subjek;
  }

  // Polymorphism: Override metode info()
  info() {
    return `${super.info()} Subjek: ${this.subjek}.`;
  }
}

// 3. ABSTRACTION (Antarmuka sederhana untuk kompleksitas di baliknya)
class Perpustakaan {
  constructor(nama) {
    this.nama = nama;
    this.koleksi = [];
  }

  tambahBuku(buku) {
    if (!(buku instanceof Buku)) {
      console.log("Hanya bisa menambahkan objek Buku");
      return;
    }
    this.koleksi.push(buku);
    console.log(`Buku "${buku.judul}" ditambahkan ke ${this.nama}`);
  }

  tampilkanBuku() {
    console.log(`\nKoleksi Buku di ${this.nama}:`);
    this.koleksi.forEach((b, i) => 
      console.log(`${i + 1}. ${b.info()} Rating: ${b.rating}`));
  }

  cariBuku(kriteria) {
    return this.koleksi.filter(buku => 
      buku.judul.toLowerCase().includes(kriteria.toLowerCase()) || 
      buku.penulis.toLowerCase().includes(kriteria.toLowerCase())
    );
  }
}

// 4. POLYMORPHISM (Banyak bentuk)
const cetakInfoBuku = (buku) => {
  console.log(buku.info());
};

// Penggunaan
const buku1 = new BukuFiksi(
  "Harry Potter", 
  "J.K. Rowling", 
  1997, 
  "978-0439708180", 
  "Fantasi"
);
buku1.rating = 4.5;

const buku2 = new BukuNonFiksi(
  "Sapiens", 
  "Yuval Noah Harari", 
  2011, 
  "978-0062316097", 
  "Sejarah"
);
buku2.rating = 5;

const perpustakaan = new Perpustakaan("Perpustakaan Nasional");
perpustakaan.tambahBuku(buku1);
perpustakaan.tambahBuku(buku2);

perpustakaan.tampilkanBuku();

// Demonstrasi polymorphism
console.log("\nDemonstrasi Polymorphism:");
cetakInfoBuku(buku1);
cetakInfoBuku(buku2);

// Demonstrasi encapsulation
console.log("\nDemonstrasi Encapsulation:");
// console.log(buku1.#isbn); // Error: Private field
console.log("ISBN melalui getter:", buku1.isbn);
console.log("Kode Pustaka:", buku1.getKodePustaka());

// Demonstrasi pencarian
console.log("\nHasil pencarian 'Harry':");
const hasilCari = perpustakaan.cariBuku("Harry");
hasilCari.forEach(b => console.log(b.info()));
