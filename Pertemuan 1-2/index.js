class Buku { // class Buku
    // constructor untuk membuat objek buku dengan judul dan penulis

    constructor(judul, penulis) {

        // properti judul dan penulis dengan nilai yang diterima dari parameter
        // paramater judul dan penulis akan diisi ketika membuat objek baru

        this.judul = judul;
        this.penulis = penulis;
    }

    // method info() untuk menampilkan informasi buku
    // method ini akan mengembalikan string yang berisi judul dan penulis buku

    info() { 
        return `Buku: ${this.judul}, ditulis oleh ${this.penulis}.`; 
    }
}

// class Perpustakaan
// class ini berfungsi untuk menyimpan koleksi buku

class Perpustakaan {

    // constructor untuk membuat objek perpustakaan
    // properti koleksi dengan nilai array kosong
    constructor() {
        this.koleksi = [];
    }

    // method TambahBuku() untuk menambahkan buku ke koleksi
    // method ini akan menerima parameter buku yang akan ditambahkan ke koleksi
    //Push digunakan untuk menambahkan elemen baru ke akhir array
    tambahBuku(buku) {
        this.koleksi.push(buku);
    }

    // method tampilkanBuku() untuk menampilkan informasi buku yang ada di koleksi
    // method ini akan menampilkan informasi buku dengan memanggil method info() dari setiap objek buku
    //Loop digunakan untuk menampilkan setiap elemen dari koleksi
    tampilkanBuku() {
        this.koleksi.forEach(b => console.log(b.info()));
        //menampilkan buku yang ada di koleksi
        //console.log b.info() untuk menampilkan informasi buku
    }
}

// buat objek buku dari class Buku
// buku1, buku2, dan buku3 adalah objek dari class Buku
// objek ini akan memiliki properti judul dan penulis

const buku1 = new Buku("Harry Potter", "J.K. Rowling");
const buku2 = new Buku("Lord of the Rings", "J.R.R. Tolkien");
const buku3 = new Buku("The Hobbit", "J.R.R. Tolkien");
const perpustakaan = new Perpustakaan(); //call class Perpustakaan dengan nama objek perpustakaan

perpustakaan.tambahBuku(buku1);//menambahkan buku1 ke koleksi buku 1

perpustakaan.tambahBuku(buku2);//menambahkan buku2 ke koleksi buku 2
perpustakaan.tambahBuku(buku3);//menambahkan buku3 ke koleksi buku 3

perpustakaan.tampilkanBuku();//menampilkan buku yang ada di koleksi
