class Serigala extends Hewan {
    constructor(nama, warnaBulu, umur) {
      super(nama, "Serigala", "daging", 4, umur, warnaBulu);
    }
  
    // Overriding method suara
    suara() {
      return `${this.nama} mengaum: Auuuuu~`;
    }
  
    // Method khusus serigala
    berburu() {
      return `${this.nama} sedang berburu dalam kelompok`;
    }
  
    // Override method minum
    minum() {
      return `${this.nama} sedang minum di sungai`;
    }
  }
  
  const alpha = new Serigala("Alpha", "Abu-abu", 5);
  console.log("===================================================================");
  console.log("contoh Overriding Method tambahan");
  console.log(alpha.nama); // Alpha
  console.log(alpha.jenis); // Serigala (Didapat dari superclass)
  
  console.log(alpha.makan()); // Alpha sedang makan daging
  console.log(alpha.berjalan()); // Alpha berjalan dengan 4 kaki
  console.log(alpha.minum()); // Alpha sedang minum di sungai
  console.log(alpha.berburu()); // Alpha sedang berburu dalam kelompok
  console.log(alpha.suara()); // Alpha mengaum: Auuuuu~
  console.log("===================================================================");
  console.log(alpha.info()); // Informasi Alpha...
  console.log("===================================================================");