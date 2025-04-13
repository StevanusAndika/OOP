class Square {
    constructor(sisi) { this.sisi = sisi; }
    luas = () => this.sisi * this.sisi;
    keliling = () => 4 * this.sisi;
    diagonal = () => Math.sqrt(2) * this.sisi;
  }
  
  const square = new Square(5);
  console.log("===========Contoh Constructor dan Method dalam Kelas (2) =======================");
  console.log(`Luas: ${square.luas()}`);          // Output: 25
  console.log(`Keliling: ${square.keliling()}`);   // Output: 20
  console.log(`Diagonal: ${square.diagonal()}`);   // Output: ~7.07
  console.log("==================================================================================");