class Persegi {
    constructor(sisi) {
      this.sisi = sisi;
    }
  
    luas() {
      return this.sisi * this.sisi;
    }
  
    keliling() {
      return 4 * this.sisi;
    }
  }
  
  const persegi1 = new Persegi(5);
  console.log("===========Contoh Constructor dan Method dalam Kelas =======================");
  console.log(`Luas persegi: ${persegi1.luas()}`); // Output: Luas persegi: 25
  console.log(`Keliling persegi: ${persegi1.keliling()}`); // Output: Keliling persegi: 20
  console.log("============================================================================");