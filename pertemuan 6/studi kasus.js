class Pembayaran {
    constructor(jumlah, mataUang = 'IDR') {
      this.jumlah = jumlah;
      this.mataUang = mataUang;
      this.tanggal = new Date();
      this.status = 'pending';
      
      if (this.constructor === Pembayaran) {
        throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
      }
    }
  
    prosesPembayaran() {
      throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
    }
  
    // Method baru untuk semua subclass
    getDetailPembayaran() {
      return `Jumlah: ${this.jumlah} ${this.mataUang}, Tanggal: ${this.tanggal.toLocaleDateString()}`;
    }
  
    // Method baru untuk semua subclass
    setStatus(status) {
      this.status = status;
      return `Status pembayaran diubah menjadi: ${status}`;
    }
  
    // Method baru untuk semua subclass
    verifikasi() {
      return `Verifikasi pembayaran ${this.jumlah} ${this.mataUang}`;
    }
  }
  
  class KartuKredit extends Pembayaran {
    constructor(jumlah, nomorKartu, namaPemilik, cvv) {
      super(jumlah);
      this.nomorKartu = nomorKartu;
      this.namaPemilik = namaPemilik;
      this.cvv = cvv;
    }
  
    prosesPembayaran() {
      this.status = 'completed';
      return `Pembayaran ${this.jumlah} ${this.mataUang} melalui Kartu Kredit berhasil!`;
    }
  
    // Method baru khusus KartuKredit
    getInfoKartu() {
      const maskedNumber = '****-****-****-' + this.nomorKartu.slice(-4);
      return `Kartu atas nama ${this.namaPemilik}, nomor ${maskedNumber}`;
    }
  
    // Method baru khusus KartuKredit
    validasiKartu() {
      return this.nomorKartu.length === 16 && this.cvv.length === 3;
    }
  }
  
  class PayPal extends Pembayaran {
    constructor(jumlah, email) {
      super(jumlah, 'USD'); // Default mata uang USD untuk PayPal
      this.email = email;
    }
  
    prosesPembayaran() {
      this.status = 'completed';
      return `Pembayaran ${this.jumlah} ${this.mataUang} melalui PayPal (${this.email}) berhasil!`;
    }
  
    // Method baru khusus PayPal
    getEmail() {
      return this.email;
    }
  
    // Method baru khusus PayPal
    setMataUang(mataUang) {
      this.mataUang = mataUang;
      return `Mata uang diubah ke ${mataUang}`;
    }
  }
  
  // Implementasi enhanced
  const bayar1 = new KartuKredit(500000, '1234567890123456', 'John Doe', '123');
  console.log("=================== Contoh Studi Kasus Abstrak Dan Interface ===========================")
  console.log("Informasi Tranksasi :"+ bayar1.getInfoKartu()); // Kartu atas nama John Doe, nomor ****-****-****-3456
  
  console.log("Informasi valid kartu :"+bayar1.validasiKartu()); // true
  console.log(bayar1.prosesPembayaran()); // Pembayaran 500000 IDR melalui Kartu Kredit berhasil!
  console.log(bayar1.getDetailPembayaran()); // Jumlah: 500000 IDR, Tanggal: [tanggal sekarang]
  
  const bayar2 = new PayPal(250000, 'user@example.com');
  console.log(bayar2.prosesPembayaran()); // Pembayaran 250000 USD melalui PayPal (user@example.com) berhasil!
  console.log(bayar2.setMataUang('EUR')); // Mata uang diubah ke EUR
  console.log("Email pengirim :" +  bayar2.getEmail()); // user@example.com
  console.log("====================================================================================")
