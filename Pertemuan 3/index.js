class Mobil {
    constructor(merk, warna, tahun, harga, bahanBakar = 'Bensin', transmisi = 'Manual') {
        this.merk = merk;
        this.warna = warna;
        this.tahun = tahun;
        this.harga = harga;
        this.bahanBakar = bahanBakar;
        this.transmisi = transmisi;
    }
    
    info() {
        return `Mobil ${this.merk} (${this.tahun}), warna ${this.warna}, harga Rp${this.harga.toLocaleString()}, ${this.bahanBakar}, ${this.transmisi}`;
    }
}

// Data 10 mobil berbeda
const mobil1 = new Mobil("Toyota Avanza", "Hitam", 2022, 250000000, "Bensin", "Automatic");
const mobil2 = new Mobil("Honda Civic", "Merah", 2021, 520000000, "Bensin", "Automatic");
const mobil3 = new Mobil("Suzuki Ertiga", "Putih", 2023, 270000000, "Bensin", "Manual");
const mobil4 = new Mobil("Mitsubishi Xpander", "Silver", 2022, 310000000, "Bensin", "Automatic");
const mobil5 = new Mobil("Toyota Fortuner", "Hitam", 2023, 650000000, "Solar", "Automatic");
const mobil6 = new Mobil("Daihatsu Rocky", "Kuning", 2022, 220000000, "Bensin", "Manual");
const mobil7 = new Mobil("Hyundai Creta", "Abu-abu", 2021, 350000000, "Bensin", "Automatic");
const mobil8 = new Mobil("Wuling Almaz", "Putih", 2023, 380000000, "Bensin", "Automatic");
const mobil9 = new Mobil("Kia Seltos", "Biru", 2022, 330000000, "Bensin", "Automatic");
const mobil10 = new Mobil("Lexus UX", "Hitam", 2023, 950000000, "Hybrid", "Automatic");

// Menampilkan info semua mobil
const daftarMobil = [mobil1, mobil2, mobil3, mobil4, mobil5, mobil6, mobil7, mobil8, mobil9, mobil10];
console.log(`===========pemanggilan js dengan es6 class :=======================`)
daftarMobil.forEach((mobil, index) => {
   

    console.log(`${index + 1}. ${mobil.info()}`);
    console.log(`===================================================================`)
});