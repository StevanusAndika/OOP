class BankAccount {
    #saldo; // Private
    #nomorRekening; // Private
    #pin; // Private
    jenisAkun = "Tabungan"; // Public (default)
    transaksiTerakhir = null; // Public
  
    constructor(nama, saldoAwal, nomorRekening, pin) {
      this.nama = nama;
      this.#saldo = saldoAwal;
      this.#nomorRekening = nomorRekening;
      this.#pin = pin;
      this.aktif = true; // Public
      this.tanggalDibuat = new Date(); // Public
    }
  
    getSaldo() {
      return `Saldo ${this.nama} adalah Rp${this.#saldo}`;
    }
  
    // Method untuk mendapatkan info rekening (tanpa detail sensitif)
    getInfoAkun() {
      return {
        nama: this.nama,
        jenisAkun: this.jenisAkun,
        aktif: this.aktif,
        tanggalDibuat: this.tanggalDibuat
      };
    }
  
    // Method untuk melakukan transaksi
    lakukanTransaksi(jumlah, jenis) {
      if (!this.aktif) {
        return "Akun tidak aktif";
      }
  
      if (jenis === "debit") {
        this.#saldo += jumlah;
      } else if (jenis === "kredit") {
        if (this.#saldo >= jumlah) {
          this.#saldo -= jumlah;
        } else {
          return "Saldo tidak mencukupi";
        }
      }
  
      this.transaksiTerakhir = {
        jenis,
        jumlah,
        tanggal: new Date(),
        saldoSisa: this.#saldo
      };
  
      return `Transaksi ${jenis} Rp${jumlah} berhasil`;
    }
  }
  console.log("============= private access =============");
  const akun = new BankAccount("Steven", 6000000, "1234567890", "1234");
  console.log(akun.getSaldo()); // Bisa diakses melalui method
  console.log(akun.getInfoAkun()); // Info umum akun
  console.log(akun.lakukanTransaksi(200000, "kredit")); // Transaksi
  console.log(akun.transaksiTerakhir); // Bisa diakses karena public
  console.log("========================================");