function cars(merk, warna, tahun, transmisi, bahanBakar, harga, kecepatan) {
  this.merk = merk;
  this.warna = warna;
  this.tahun = tahun;
  this.transmisi = transmisi;
  this.bahanBakar = bahanBakar;
  this.harga = harga;
  this.kecepatan = kecepatan;
  this.jumlahRoda = 4;
  this.jumlahPintu = 4;
  
  this.info = function() {
      return `Mobil ini adalah ${this.merk} berwarna ${this.warna}, tahun ${this.tahun}, transmisi ${this.transmisi}, bahan bakar ${this.bahanBakar}, dengan harga Rp${this.harga}. Kecepatan maksimal: ${this.kecepatan} km/jam. dan jumlah roda ${this.jumlahRoda} dan jumlah pintu ${this.jumlahPintu}.`;
  };

  this.cekKecepatan = function() {
      return `${this.merk} memiliki kecepatan maksimal ${this.kecepatan} km/jam.`;
  };
}

const avanza = new cars(
  "Toyota Avanza", 
  "Hitam", 
  2022, 
  "Automatic", 
  "Bensin", 
  250000000, 
  180
);

console.log("===========pemanggilan js dengan constructor function sebelum ES6 :=======================");
console.log(avanza.info() + "<br>");
console.log(avanza.cekKecepatan());
console.log("===================================================================");