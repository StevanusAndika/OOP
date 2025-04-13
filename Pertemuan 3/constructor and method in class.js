class Buku {
    constructor(judul, penulis, tahunTerbit, genre, harga, isbn) {
        this.judul = judul;
        this.penulis = penulis;
        this.tahunTerbit = tahunTerbit || "Tidak diketahui";
        this.genre = genre || "Umum";
        this.harga = harga || 0;
        this.isbn = isbn || "Tidak ada";
    }
}

const daftarBuku = [
    new Buku(
        "Clean Code",
        "Robert C. Martin",
        2008,
        "Pemrograman",
        150000,
        "978-0132350884",
    ),
    new Buku(
        "Laskar Pelangi",
        "Andrea Hirata",
        undefined,
        "Fiksi",
        100000,
    ),
    new Buku(
        "Harry Potter",
        "J.K. Rowling",
        1997,
        "Fantasi",
        200000,
        "978-0747532743",
    ),
    new Buku(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        1925,
        "Fiksi",
        120000,
        "978-0743273565",
    ),
    new Buku(
        "To Kill a Mockingbird",
        "Harper Lee",
        1960,
        "Fiksi",
        150000,
        "978-0061120084",
    ),
    new Buku(
        "1984",
        "George Orwell",
        1949,
        "Dystopian",
        130000,
        "978-0451524935",
    )
];

console.log("=========== Daftar Buku ===========");
daftarBuku.forEach((buku, index) => {
    console.log(`\nBuku #${index + 1}`);
    console.log("-------------------------------");
    console.log(`Judul: ${buku.judul}`);
    console.log(`Penulis: ${buku.penulis}`);
    console.log(`Tahun Terbit: ${buku.tahunTerbit}`);
    console.log(`Genre: ${buku.genre}`);
    console.log(`Harga: Rp${buku.harga.toLocaleString()}`);
    console.log(`ISBN: ${buku.isbn}`);
    console.log("-------------------------------");
});
console.log("===================================");