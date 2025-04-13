class Mahasiswa {
    constructor(nama, nim, jurusan, angkatan, alamat, email) {
      this.nama = nama;
      this.nim = nim;
      this.jurusan = jurusan;
      this.angkatan = angkatan;
      this.alamat = alamat || "Belum diisi";
      this.email = email || "Belum diisi";
      this.mataKuliah = [];
      this.ipk = 0;
    }
  
    perkenalan() {
      return `Halo, saya ${this.nama} dengan NIM ${this.nim}, 
  jurusan ${this.jurusan}, angkatan ${this.angkatan}.`;
    }
  
    tambahMataKuliah(matkul) {
      this.mataKuliah.push(matkul);
      return `Mata kuliah ${matkul} berhasil ditambahkan.`;
    }
  
    updateIPK(nilai) {
      this.ipk = nilai;
      return `IPK diperbarui menjadi ${this.ipk}`;
    }
  
    infoLengkap() {
      return `
        Data Mahasiswa:
        Nama: ${this.nama}
        NIM: ${this.nim}
        Jurusan: ${this.jurusan}
        Angkatan: ${this.angkatan}
        Alamat: ${this.alamat}
        Email: ${this.email}
        Mata Kuliah: ${this.mataKuliah.join(', ') || 'Belum ada'}
        IPK: ${this.ipk.toFixed(2)}
      `;
    }
  }
  
  // Membuat objek dari kelas Mahasiswa
  const mahasiswa1 = new Mahasiswa(
    "Aldi", 
    "2203123456", 
    "Teknik Informatika", 
    2022,
    "Jl. Merdeka No. 10",
    "aldi@example.com"
  );
  
  const mahasiswa2 = new Mahasiswa(
    "Budi", 
    "2203123457", 
    "Sistem Informasi", 
    2022
  );
  
  // Menggunakan metode tambahan
  mahasiswa1.tambahMataKuliah("Pemrograman Web");
  mahasiswa1.tambahMataKuliah("Basis Data");
  mahasiswa1.updateIPK(3.75);
  
  mahasiswa2.tambahMataKuliah("Algoritma");
  mahasiswa2.updateIPK(3.5);
  
  console.log("===========Pembuatan dan Penggunaan Objek =========================");
  console.log(mahasiswa1.perkenalan());
  console.log(mahasiswa1.infoLengkap());
  
  console.log(mahasiswa2.perkenalan());
  console.log(mahasiswa2.infoLengkap());
    
  console.log("=====================================================================");