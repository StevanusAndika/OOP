class Mobil extends Kendaraan {
    constructor(merk, tahun, warna, jumlahPintu) {
      super(merk, tahun, warna);
      this.jumlahPintu = jumlahPintu || 4;
      this.mesinHidup = false;
    }
  
    maju() {
      if (!this.mesinHidup) return `${this.merk} tidak bisa maju, mesin mati!`;
      return `${this.merk} melaju dengan kecepatan ${this.kecepatan} km/jam!`;
    }
  
    // Method baru khusus Mobil
    nyalakanMesin() {
      this.mesinHidup = true;
      return "Mesin mobil dinyalakan";
    }
  
    // Method baru khusus Mobil
    matikanMesin() {
      this.mesinHidup = false;
      this.kecepatan = 0;
      return "Mesin mobil dimatikan";
    }
  
    // Method baru khusus Mobil
    bukaPintu(pintu) {
      return `Pintu ${pintu} mobil ${this.merk} terbuka`;
    }
  }
  
  const avanza = new Mobil("Toyota Avanza", 2020, "Hitam", 5);
  console.log("=================== Contoh abstrak implementasi kendaraan ===========================")
  console.log(avanza.getInfo()); // Toyota Avanza tahun 2020, warna Hitam
  console.log(avanza.nyalakanMesin()); // Mesin mobil dinyalakan
  avanza.setKecepatan(60);
  console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan 60 km/jam!
  console.log(avanza.bukaPintu("kanan depan")); // Pintu kanan depan mobil Toyota Avanza terbuka
  console.log("====================================================================================")
