// Kelas turunan (subclass)
class Kucing extends Hewan {
    constructor(nama, warnaBulu, umur) {
      super(nama, "Kucing", "ikan", 4, umur, warnaBulu);
    }
  
    // Method khusus kucing
    memanjat() {
      return `${this.nama} sedang memanjat pohon`;
    }
  
    // Override method minum
    minum() {
      return `sedang menjilat-jilat air`;
    }
  }
  
  const milo = new Kucing("Milo", "Putih", 2);
  console.log("===================================================================");
  console.log("contoh superclass dan subclass");
    console.log(milo.nama); // Milo
    console.log(milo.jenis); // Kucing (Didapat dari superclass)
    console.log(milo.suara()); // Milo bersuara...
    console.log(milo.makan()); // Milo sedang makan ikan
    console.log(milo.berjalan()); // Milo berjalan dengan 4 kaki
    console.log(milo.minum()); // Milo sedang minum air
    console.log(milo.memanjat()); // Milo sedang memanjat pohon
    console.log("===================================================================");
    console.log(milo.info()); // Informasi Milo...
  console.log("===================================================================");