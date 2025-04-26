class Anjing extends Hewan {
    constructor(nama, warnaBulu, umur) {
      super(nama, "Anjing", "daging", 4, umur, warnaBulu);
    }
  
    // Overriding method suara
    suara() {
      return `${this.nama} menggonggong: Woof woof!`;
    }
  
    // Method khusus anjing
    menjaga() {
      return `${this.nama} sedang menjaga rumah`;
    }
  }
  
  const doge = new Anjing("Doge", "Coklat", 3);
      console.log("===================================================================");
      console.log("contoh Overriding Method dan super Keyword");
      console.log(doge.nama); // Doge
      console.log(doge.jenis); // Anjing (Didapat dari superclass)
      console.log(doge.suara()); // Doge menggonggong: Woof woof!
      console.log(doge.makan()); // Doge sedang makan daging
      console.log(doge.berjalan()); // Doge berjalan dengan 4 kaki
      console.log(doge.minum()); // Doge sedang minum air
      console.log(doge.menjaga()); // Doge sedang menjaga rumah
      console.log("===================================================================");
      console.log(doge.info()); // Informasi Doge...
     