class Mobil {
    #kecepatan = 0; // Private property
    #bahanBakar = 0; // dalam liter
    #isMesinHidup = false;
    #transmisi = 'netral'; // bisa: netral, maju, mundur
    #odometer = 0; // total jarak tempuh dalam km
    #warna = 'putih';
    #merek = 'generik';
    #tahunProduksi = 2023;
    #kapasitasTangki = 40; // dalam liter
    #konsumsiBahanBakar = 0.1; // liter per km
  
    constructor(merek, warna, tahunProduksi, kapasitasTangki = 40) {
      this.#merek = merek;
      this.#warna = warna;
      this.#tahunProduksi = tahunProduksi;
      this.#kapasitasTangki = kapasitasTangki;
    }
  
    // Getter dan setter untuk kecepatan
    get kecepatan() {
      return `${this.#kecepatan} km/jam`;
    }
  
    set kecepatan(value) {
      if (value < 0) {
        console.log("Kecepatan tidak bisa negatif!");
      } else if (!this.#isMesinHidup) {
        console.log("Mesin mati, tidak bisa mengatur kecepatan!");
      } else {
        this.#kecepatan = value;
      }
    }
  
    // Method untuk menyalakan mesin
    nyalakanMesin() {
      if (this.#bahanBakar <= 0) {
        console.log("Bahan bakar habis, tidak bisa menyalakan mesin!");
        return false;
      }
      this.#isMesinHidup = true;
      this.#transmisi = 'netral';
      console.log("Mesin dinyalakan");
      return true;
    }
  
    // Method untuk mematikan mesin
    matikanMesin() {
      this.#isMesinHidup = false;
      this.#kecepatan = 0;
      this.#transmisi = 'netral';
      console.log("Mesin dimatikan");
    }
  
    // Method untuk mengisi bahan bakar
    isiBahanBakar(jumlah) {
      if (jumlah <= 0) {
        console.log("Jumlah bahan bakar harus positif!");
        return;
      }
      
      const sisaKapasitas = this.#kapasitasTangki - this.#bahanBakar;
      if (jumlah > sisaKapasitas) {
        this.#bahanBakar = this.#kapasitasTangki;
        console.log(`Tangki terisi penuh, kelebihan ${jumlah - sisaKapasitas} liter`);
      } else {
        this.#bahanBakar += jumlah;
        console.log(`Berhasil mengisi ${jumlah} liter bahan bakar`);
      }
    }
  
    // Method untuk berkendara
    berkendara(jarak) {
      if (!this.#isMesinHidup) {
        console.log("Mesin mati, tidak bisa berkendara!");
        return;
      }
      
      if (this.#transmisi !== 'maju') {
        console.log("Transmisi tidak di posisi maju!");
        return;
      }
      
      const bahanBakarDibutuhkan = jarak * this.#konsumsiBahanBakar;
      
      if (bahanBakarDibutuhkan > this.#bahanBakar) {
        const jarakMaks = this.#bahanBakar / this.#konsumsiBahanBakar;
        console.log(`Bahan bakar tidak cukup! Hanya bisa menempuh ${jarakMaks.toFixed(1)} km`);
        this.#odometer += jarakMaks;
        this.#bahanBakar = 0;
        this.#kecepatan = 0;
        console.log("Bahan bakar habis, mesin mati otomatis");
        this.#isMesinHidup = false;
      } else {
        this.#odometer += jarak;
        this.#bahanBakar -= bahanBakarDibutuhkan;
        console.log(`Berhasil menempuh ${jarak} km`);
      }
    }
  
    // Getter untuk informasi mobil
    get info() {
      return {
        merek: this.#merek,
        warna: this.#warna,
        tahun: this.#tahunProduksi,
        kecepatan: this.#kecepatan,
        bahanBakar: `${this.#bahanBakar} liter`,
        odometer: `${this.#odometer} km`,
        statusMesin: this.#isMesinHidup ? 'hidup' : 'mati',
        transmisi: this.#transmisi
      };
    }
  
    // Method untuk mengubah transmisi
    ubahTransmisi(mode) {
      if (!this.#isMesinHidup) {
        console.log("Mesin mati, tidak bisa mengubah transmisi!");
        return;
      }
      
      const modes = ['netral', 'maju', 'mundur'];
      if (!modes.includes(mode)) {
        console.log("Mode transmisi tidak valid!");
        return;
      }
      
      if (this.#kecepatan > 0) {
        console.log("Berhenti dahulu sebelum mengubah transmisi!");
        return;
      }
      
      this.#transmisi = mode;
      console.log(`Transmisi diubah ke mode ${mode}`);
    }
  }
  
  // Contoh penggunaan
  console.log("============= getter and setter =============");
  const avanza = new Mobil('Toyota', 'Hitam', 2022, 45);
  console.log(avanza.info);
  
  avanza.isiBahanBakar(30);
  avanza.nyalakanMesin();
  avanza.ubahTransmisi('maju');
  avanza.kecepatan = 60;
  avanza.berkendara(100);
  console.log(avanza.info);
  
  avanza.berkendara(200);
  avanza.matikanMesin();
  console.log(avanza.info);
  console.log("==============================================");