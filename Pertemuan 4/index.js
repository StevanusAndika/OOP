class Mahasiswa {
    constructor(nama, nim, jurusan, kelas) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.kelas = kelas;
    }
}
console.log("======Modifier access public ================================");
const mahasiswa1 = new Mahasiswa("Steven", "202303110008", "RPL", "RK231");
console.log(`Halo Nama kamu: ${mahasiswa1.nama},Kamu Kelas: ${mahasiswa1.kelas}, Dan Jurusan Kamu: ${mahasiswa1.jurusan} Dengan NIM: ${mahasiswa1.nim}`);
console.log("===============================================================");