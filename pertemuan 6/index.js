class Kendaraan {
    constructor(merk, tahun, warna) {
      this.merk = merk;
      this.tahun = tahun || new Date().getFullYear();
      this.warna = warna || "Putih";
      this.kecepatan = 0;
    }
  
    // Method abstrak
    maju() {
      throw new Error("Method 'maju()' harus diimplementasikan!");
    }
  
    // Method baru
    getInfo() {
      return `${this.merk} tahun ${this.tahun}, warna ${this.warna}`;
    }
  
    // Method baru
    setKecepatan(kecepatan) {
      this.kecepatan = kecepatan;
      return `Kecepatan diatur menjadi ${kecepatan} km/jam`;
    }
  
    // Method baru
    berhenti() {
      this.kecepatan = 0;
      return "Kendaraan berhenti";
    }
  }