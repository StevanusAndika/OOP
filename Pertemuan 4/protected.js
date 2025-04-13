class Hewan {
    constructor(nama, jenis, umur) {
      this._nama = nama;   // Konvensi protected
      this._jenis = jenis; // Atribut baru
      this._umur = umur;   // Atribut baru
    }
    
    suara() {
      return `${this._nama}meong meong ...`;
    }
    
    // Getter untuk akses terkontrol
    get nama() {
      return this._nama;
    }
    
    get jenis() {
      return this._jenis;
    }
    
    get umur() {
      return this._umur;
    }
    
    // Setter untuk modifikasi terkontrol
    set umur(umurBaru) {
      if (umurBaru > 0) {
        this._umur = umurBaru;
      }
    }
  }
  
  class Kucing extends Hewan {
    constructor(nama, umur, warnaBulu) {
      super(nama, "Kucing", umur);
      this._warnaBulu = warnaBulu; // Atribut spesifik Kucing
    }
    
    suara() {
      return ` mengeong!`;
    }
    
    get warnaBulu() {
      return this._warnaBulu;
    }
  }
console.log("============= protected access =============");
  const milo = new Kucing("Milo", 2, "Oranye");
  console.log(milo.suara());      // Milo mengeong!
  console.log(milo.jenis);        // Kucing
  console.log(milo.umur);         // 2
  console.log(milo.warnaBulu);    // Oranye
  
  milo.umur = 3; // Menggunakan setter
  console.log(milo.umur);         // 3
  console.log("kucing itu bernama " + milo.nama + " berumur " + milo.umur + " tahun, dan warna bulunya adalah " + milo.warnaBulu + " dan jenisnya adalah " + milo.jenis + " dan suaranya adalah " + milo.suara());
  console.log("==============================================");