
class Mobile {
    constructor(merk, tahun, warna, harga) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        }

        this.merk = merk;
        this.tahun = tahun || new Date().getFullYear();
        this.warna = warna || "Putih";
        this.kecepatan = 0;
        this.harga = harga || 0;
        this.beroperasi = false;
    }

    // Method abstrak (harus diimplementasikan oleh subclass)
    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }

    rem() {
        throw new Error("Method 'rem()' harus diimplementasikan!");
    }

    // Method konkret (sudah memiliki implementasi)
    klakson() {
        return `${this.merk} berbunyi "Toot toot!"`;
    }

    service(jenis) {
        return `${this.merk} melakukan service ${jenis || 'rutin'}`;
    }

    getUmur() {
        return new Date().getFullYear() - this.tahun;
    }

    // Method baru
    nyalakan() {
        this.beroperasi = true;
        return `${this.merk} dinyalakan`;
    }

    matikan() {
        this.beroperasi = false;
        this.kecepatan = 0;
        return `${this.merk} dimatikan`;
    }

    getInfo() {
        return `Kendaraan ${this.merk}:
        - Tahun: ${this.tahun}
        - Warna: ${this.warna}
        - Harga: Rp${this.harga.toLocaleString()}
        - Usia: ${this.getUmur()} tahun`;
    }

    // Static method
    static compareUmur(kendaraanA, kendaraanB) {
        return kendaraanA.getUmur() - kendaraanB.getUmur();
    }
}
console.log("=================== Contoh abstrak implementasi kendaraan ===========================")
// Contoh penggunaan kelas abstrak
console.log("Kendaraan tidak bisa diinstansiasi langsung");
console.log("====================================================================================")

// Ekspor kelas jika menggunakan modul
// export default Kendaraan;