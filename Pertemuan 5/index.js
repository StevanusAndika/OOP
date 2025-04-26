// Kelas induk (superclass)
class Hewan {
    constructor(nama, jenis, makanan, jumlahKaki, umur, warnaBulu) {
      this.nama = nama;
      this.jenis = jenis;
      this.makanan = makanan;
      this.jumlahKaki = jumlahKaki;
      this.umur = umur;
      this.warnaBulu = warnaBulu;
    }
  
    suara() {
      return `${this.nama} meow meow`;
    }
  
    makan() {
      return `${this.nama} sedang makan ${this.makanan}`;
    }
  
    berjalan() {
      return `${this.nama} berjalan dengan ${this.jumlahKaki} kaki`;
    }
  
    minum() {
      return `${this.nama} sedang minum air`;
    }
  
    info() {
      return `Informasi ${this.nama}:
  Jenis: ${this.jenis}
  Umur: ${this.umur} tahun
  Warna bulu: ${this.warnaBulu}
  Jumlah kaki: ${this.jumlahKaki}
  Makanan: ${this.makanan}
  Minum: ${this.minum()}`;
  
    }

  
  }