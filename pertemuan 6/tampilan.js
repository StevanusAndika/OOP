// Enhanced Interface
const kendaraanInterface = {
    maju: function() {
      throw new Error("Method 'maju()' harus diimplementasikan!");
    },
    berhenti: function() {
      throw new Error("Method 'berhenti()' harus diimplementasikan!");
    },
    getInfo: function() {
      throw new Error("Method 'getInfo()' harus diimplementasikan!");
    }
  };
  
  class Sepeda {
    constructor(merk, jenis, jumlahGigi) {
      this.merk = merk;
      this.jenis = jenis || "Gunung";
      this.jumlahGigi = jumlahGigi || 21;
      this.kecepatan = 0;
    }
  
    maju() {
      this.kecepatan += 5;
      return `${this.merk} melaju dengan tenaga manusia! Kecepatan: ${this.kecepatan} km/jam`;
    }
  
    berhenti() {
      this.kecepatan = 0;
      return `${this.merk} berhenti`;
    }
  
    getInfo() {
      return `Sepeda ${this.merk}, jenis ${this.jenis}, ${this.jumlahGigi} gigi`;
    }
  
    // Method baru khusus Sepeda
    pindahGigi(gigi) {
      return `Memindahkan gigi sepeda ${this.merk} ke gigi ${gigi}`;
    }
  }
  
  // Menguji implementasi interface
  const polygon = new Sepeda("Polygon", "Bebas", 24);
  console.log("=================== Contoh Interface ===========================")
  console.log(polygon.getInfo()); // Sepeda Polygon, jenis Bebas, 24 gigi
  console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia! Kecepatan: 5 km/jam
  console.log(polygon.pindahGigi(3)); // Memindahkan gigi sepeda Polygon ke gigi 3
  console.log("====================================================================================")

  // Validasi interface
  for (const method of ['maju', 'berhenti', 'getInfo']) {
    if (typeof polygon[method] !== 'function') {
      throw new Error(`Class Sepeda harus mengimplementasikan '${method}()'!`);
    }
  }