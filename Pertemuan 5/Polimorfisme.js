class Burung extends Hewan {
    constructor(nama, warnaBulu, umur) {
      super(nama, "Burung", "biji-bijian", 2, umur, warnaBulu);
    }
  
    // Overriding method suara
    suara() {
      return `${this.nama} berkicau: Cip cip!`;
    }
  
    // Method khusus burung
    terbang() {
      return `${this.nama} sedang terbang tinggi`;
    }
  
    // Override method berjalan
    berjalan() {
      return `${this.nama} melompat-lompat dengan ${this.jumlahKaki} kaki`;
    }
  }
  
  // Membuat array berisi berbagai hewan
  const hewanList = [
    new Kucing("Milo", "Putih", 2),
    new Anjing("Buddy", "Hitam", 3),
    new Burung("Tweety", "Kuning", 1),
    new Serigala("Alpha", "Abu-abu", 5)
  ];
  
  console.log("===================================================================");
  console.log("Contoh Polimorfisme");
  console.log("===================================================================");
  
  // Demonstrasi polimorfisme - memanggil method suara() yang berbeda untuk setiap objek
  hewanList.forEach(hewan => {
    console.log(hewan.suara());
  });
  
  console.log("===================================================================");
  console.log("Demonstrasi perilaku berbeda dari masing-masing hewan:");
  hewanList.forEach(hewan => {
    console.log(`- ${hewan.nama}:`);
    console.log(`  Suara: ${hewan.suara()}`);
    console.log(`  Cara berjalan: ${hewan.berjalan()}`);
    console.log(`  Aktivitas khusus: ${
      hewan instanceof Kucing ? hewan.memanjat() :
      hewan instanceof Anjing ? hewan.menjaga() :
      hewan instanceof Burung ? hewan.terbang() :
      hewan instanceof Serigala ? hewan.berburu() :
      'Tidak ada aktivitas khusus'
    }`);
    console.log("-------------------------------------------------------------------");
  });
  
  console.log("===================================================================");